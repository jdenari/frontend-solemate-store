// patterns imports
import React, { useState, useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';

// child components imports
import SolemateButton from '../../SolemateButton';
import MessageReturn from '../../MessageReturn';
import ImageCropper from './ImageCropper';

// actions import 
import { useDispatch, useSelector } from 'react-redux';
import { SET_MESSAGE, CLEAR_MESSAGE } from '../../../store/actions';
import { RootState } from '../../../store/types';

// external imports
import axios from 'axios';
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
    const categories = useSelector((state: RootState) => state.category.categories);
    
    // data constants
        // form variables
    const [formData, setFormData] = useState<IFormData>({
        productClass: '',
        productName: '',
        description: '',
        price: 0,
        quantity: 0,
        size: '',
        statusProduct: 'ACTIVE',
    });

    const getClassOptions = () => {return categories.map((category) => category.classProduct);};
    
    const classOptions = getClassOptions();
    const [selectedClass, setSelectedClass] = useState(classOptions[0]);

        // form image
    const [photo, setPhoto] = useState<File | null>(null);
    const [imageName, setImageName] = useState<string>('');

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
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {const selectedFile = e.target.files![0];setCroppedImage(null);setImageName('');setPhoto(null);setPhoto(selectedFile);}
        
    // handles the form submission to add a product
    const handleAddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();
        try {
            const productResponse = await submitProductAndPhoto();
            dispatch(SET_MESSAGE({ text: productResponse.data, variant: 'success' }));
            setTimeout(() => { dispatch(CLEAR_MESSAGE()); window.location.reload(); }, 3000);
        } catch (error) {
            dispatch(SET_MESSAGE({ text: 'Error adding product!', variant: 'danger' }));
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
            dispatch(SET_MESSAGE({ text: 'Error submitting product and photo!', variant: 'danger' }));
            setTimeout(() => { dispatch(CLEAR_MESSAGE()); }, 3000);
            throw error;
        }
    };    

    return (
        <>
            <div className='d-flex'>
                <div className='w-50 m-auto border shadow-sm my-5 px-3 py-4 mx-3 bg-body-tertiary rounded'>
                    <h2 className="text-center mb-5">Image</h2>
                    {photo && (
                        <div className='d-flex p-3 my-2 align-items-center m-auto'>
                            <ImageCropper photo={photo} imageName={imageName} setCroppedImage={setCroppedImage} />
                        </div>
                    )}
                </div>
                <Form onSubmit={handleAddProduct} className="w-50 m-auto border shadow-sm my-5 px-3 py-4 mx-3 mb-5 bg-body-tertiary rounded">
                    <h2 className="text-center mb-5">Register Product</h2>
                    <Form.Group controlId="formProductName" className='d-flex my-2 align-items-center'>
                        <Form.Label className='col-3 text-end px-2 m-0'>Name Product</Form.Label>
                        <Form.Control
                            type="text"
                            name="productName"
                            value={formData.productName}
                            onChange={handleChange}
                            placeholder="Tênis Air Jordan I"
                        />
                    </Form.Group>
                    <Form.Group controlId="formClass" className='d-flex my-2 align-items-center'>
                        <Form.Label className='col-3 text-end px-2 m-0'>Class</Form.Label>
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
                        <Form.Label className='col-3 text-end px-2  m-0'>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Comfortable shoes for basketball practice..."
                        />
                    </Form.Group>
                    <Form.Group controlId="formPrice" className='d-flex my-2 align-items-center'>
                        <Form.Label className='col-3 text-end px-2 m-0'>Price</Form.Label>
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
                        <Form.Label className='col-3 text-end px-2 m-0'>Size</Form.Label>
                        <Form.Control
                            type="text"
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                            placeholder="P, M, G, GG, XG..."
                        />
                    </Form.Group>
                    <Form.Group controlId="formQuantity" className='d-flex my-2 align-items-center'>
                        <Form.Label className='col-3 text-end px-2 m-0'>Quantity</Form.Label>
                        <Form.Control
                            type="text"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formImage" className='d-flex my-2 align-items-center'>
                        <Form.Label className='col-3 text-end px-2 m-0'>Image</Form.Label>
                        <Form.Control
                            type="file"
                            name="image"
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                    </Form.Group>
                    <div className='d-flex flex-row-reverse my-3'>
                        <SolemateButton 
                            buttonText="Register" 
                            onSubmit={handleAddProduct} 
                            variant='purple'
                        />

                    </div>
                    {messageReturn.message && <MessageReturn text={messageReturn.message.text} variant={messageReturn.message.variant} />}
                </Form>
            </div>
        </>
    );
};

export default FormNewProduct;