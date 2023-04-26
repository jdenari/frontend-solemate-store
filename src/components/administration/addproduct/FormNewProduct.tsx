// patterns imports
import React, { useState, useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';

// child components imports
import MainButton from '../../MainButton';
import MessageReturn from '../../MessageReturn';

// actions import 
import { useDispatch, useSelector } from 'react-redux';
import { SET_MESSAGE, CLEAR_MESSAGE } from '../../../store/actions';
import { RootState } from '../../../store/types';

// external imports
import axios from 'axios';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';

// props
interface IFormData {
    productClass: string;
    productName: string;
    description: string;
    price: number;
    quantity: number;
    size: string;
    statusProduct: string;
}

const FormNewProduct: React.FC = () => {

    const dispatch = useDispatch();
    const messageReturn = useSelector((state: RootState) => state.returnMessage);
    const classProduct = useSelector((state: RootState) => state.classProduct);
    
    // data constants
        // form variables
    const [formData, setFormData] = useState<IFormData>({
        productClass: '',
        productName: '',
        description: '',
        price: 0,
        quantity: 0,
        size: '',
        statusProduct: 'ATIVO',
    });
    
    const classOptions = ['Blusas', 'Calças', 'Sapatos'];
    const [selectedClass, setSelectedClass] = useState(classOptions[0]);

        // form image
    const [photo, setPhoto] = useState<File | null>(null);
    const [imageName, setImageName] = useState<string>('');
    const imgRef = useRef<any>(null);

        // cropper image
    const [cropper, setCropper] = useState<Cropper | null>(null);
    const [croppedImage, setCroppedImage] = useState<Blob | null>(null);

    // update the text input to variables
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        if (name === 'productName') {
            setImageName(value);
        }
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const formattedValue = value.replace(/,/g, '.');
        setFormData((prevState) => ({
            ...prevState,
            [name]: parseFloat(formattedValue),
        }));
    };

    // update the image
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {const selectedFile = e.target.files![0];setPhoto(selectedFile);}

    // cuts the image using Cropper.js library and sets the cropped image as state
    const handleCropImage = () => {
        const cropper = imgRef.current?.cropper;
        if (cropper) {
            cropper.getCroppedCanvas().toBlob((blob: Blob | null) => {
            if (blob) {setCroppedImage(blob);}
        }, "image/jpeg");
        }
    };
        
    // handles the form submission to add a product
    const handleAddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const productResponse = await submitProductAndPhoto();
            dispatch(SET_MESSAGE({ text: productResponse.data, variant: 'success' }));
            setTimeout(() => { dispatch(CLEAR_MESSAGE()); window.location.reload(); }, 3000);
        } catch (error) {
            dispatch(SET_MESSAGE({ text: 'Erro ao adicionar o produto!', variant: 'danger' }));
            setTimeout(() => { dispatch(CLEAR_MESSAGE()); }, 3000);
        }
    };
    
    const submitProductAndPhoto = async () => {
        if (!croppedImage) {
            console.error("Image not cropped!");
            throw new Error("Image not cropped!");
        }
        const formDataToSend = new FormData();
        formDataToSend.append('file', croppedImage);
        formDataToSend.append('name', imageName);
        formDataToSend.append('src', JSON.stringify({
            ...formData,
            productClass: selectedClass,
        }));
        try {
            const response = await axios.post('http://localhost:5000/api/product/add-product', formDataToSend, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setPhoto(null);
            setImageName('');
            setCroppedImage(null);
            return response;
        } catch (error) {
            dispatch(SET_MESSAGE({ text: 'Erro ao submeter o produto e a foto!', variant: 'danger' }));
            setTimeout(() => { dispatch(CLEAR_MESSAGE()); }, 3000);
            throw error;
        }
    };    
        
    // initializes Cropper.js on the photo once it is loaded
    useEffect(() => {
        if (photo && imgRef.current) {
            if (cropper) {
                cropper.destroy();
            }
            const newCropper = new Cropper(imgRef.current, {
                aspectRatio: 1,
                viewMode: 1,
                dragMode: 'move',
                autoCropArea: 1,
                cropBoxResizable: false,
                cropBoxMovable: false,
                minCropBoxWidth: 202,
                minCropBoxHeight: 202,
                ready: function() {
                newCropper.setCropBoxData({
                    width: 202,
                    height: 202,
                    left: (newCropper.getContainerData().width - 202) / 2,
                    top: (newCropper.getContainerData().height - 202) / 2
                });
            }
        });
        setCropper(newCropper);
        }
    }, [photo]);

    return (
        <>
            <div>
                <Form onSubmit={handleAddProduct} className="w-50 m-auto border shadow-sm my-5 px-3 py-4 mb-5 bg-body-tertiary rounded">
                    <h2 className="text-center mb-5">Adicionar Produto</h2>
                    <Form.Group controlId="formProductName" className='d-flex my-2 align-items-center'>
                        <Form.Label className='col-3 text-end px-2 m-0'>Nome do Produto</Form.Label>
                        <Form.Control
                            type="text"
                            name="productName"
                            value={formData.productName}
                            onChange={handleChange}
                            placeholder="Tênis Air Jordan I"
                        />
                    </Form.Group>
                    <Form.Group controlId="formClass" className='d-flex my-2 align-items-center'>
                        <Form.Label className='col-3 text-end px-2 m-0'>Classe</Form.Label>
                        <Form.Select
                            name="productClass"
                            value={selectedClass}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedClass(e.target.value)}
                        >
                            {classOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formDescription" className='d-flex my-2 align-items-center'>
                        <Form.Label className='col-3 text-end px-2  m-0'>Descrição</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Tênis confortável para a prática de basquete..."
                        />
                    </Form.Group>
                    <Form.Group controlId="formPrice" className='d-flex my-2 align-items-center'>
                        <Form.Label className='col-3 text-end px-2 m-0'>Preço</Form.Label>
                        <Form.Control
                            type="number"
                            step="0.01"
                            min="0"
                            name="price"
                            value={formData.price}
                            onChange={handlePriceChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formStockSize" className='d-flex my-2 align-items-center'>
                        <Form.Label className='col-3 text-end px-2 m-0'>Tamanho</Form.Label>
                        <Form.Control
                            type="text"
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                            placeholder="P, M, G, GG, XG..."
                        />
                    </Form.Group>
                    <Form.Group controlId="formQuantity" className='d-flex my-2 align-items-center'>
                        <Form.Label className='col-3 text-end px-2 m-0'>Quantidade</Form.Label>
                        <Form.Control
                            type="text"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formImage" className='d-flex my-2 align-items-center'>
                        <Form.Label className='col-3 text-end px-2 m-0'>Imagem</Form.Label>
                        <Form.Control
                            type="file"
                            name="image"
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                    </Form.Group>
                    {photo && (
                        <div className='d-flex my-2 align-items-center'>
                            <Form.Label className='col-3 text-end px-2 m-0'>Imagem selecionada:</Form.Label>
                            <img ref={imgRef} src={URL.createObjectURL(photo)} alt={imageName} className="col-3"/>
                        </div>
                    )}
                    <div className='d-flex flex-row-reverse my-3'>
                        <MainButton buttonText="Adicionar" onSubmit={handleAddProduct} />
                        <button type="button" className="btn btn-secondary" onClick={handleCropImage}>
                            Cortar Imagem
                        </button>
                    </div>
                        {messageReturn.message && <MessageReturn text={messageReturn.message.text} variant={messageReturn.message.variant} />}
                </Form>
            </div>
        </>
    );
};

export default FormNewProduct;