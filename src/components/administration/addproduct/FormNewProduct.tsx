import React, { useState, useEffect } from 'react';
import MainButton from '../../MainButton';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import MessageReturn from '../../MessageReturn';

interface IFormData {
    productClass: string;
    productName: string;
    description: string;
    price: number;
    stock: {
        size: string;
        quantity: number;
    };
}

const NovosProdutos: React.FC = () => {
    const [formData, setFormData] = useState<IFormData>({
        productClass: '',
        productName: '',
        description: '',
        price: 0,
        stock: {
            size: '',
            quantity: 1,
        },
    });

    const [photo, setPhoto] = useState<File | null>(null);
    const [imageName, setImageName] = useState<string>('');
    const [message, setMessage] = useState<{ text: string; variant: string } | null>(null);

    const classOptions = ['Blusas', 'Calças', 'Sapatos'];
    const [selectedClass, setSelectedClass] = useState(classOptions[0]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {const selectedFile = e.target.files![0];setPhoto(selectedFile);}

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
    

    const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            stock: {
                ...prevState.stock,
                [name]: value,
            },
        }));
    };

    const handleAddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let uploadSuccess = false;
        try {
            await handleSubmitPhoto(e);
            uploadSuccess = true;
        } catch (error) {
            setMessage({ text: 'Erro ao enviar os dados', variant: 'danger' });
        }
    
        if (uploadSuccess) {
            try {
                await handleSubmit(e);
            } catch (error) {
                setMessage({ text: 'Erro ao enviar os dados', variant: 'danger' });
            }
        }
    };
    
      
    const handleSubmitPhoto = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', photo!);
        formData.append('name', imageName);
    
        try {
            const response = await axios.post('http://localhost:5000/api/photos/add-photos', formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            });
            console.log(response.data);
            setPhoto(null);
            setImageName('');
        } catch (error) {
            console.error(error);
        }
    }   
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/product/add-product', {
                ...formData,
                productClass: selectedClass,
        });
            setMessage({ text: response.data, variant: 'success' });
            window.location.reload();
        } catch (error) {
            setMessage({ text: 'Erro ao enviar os dados', variant: 'danger' });
        }
    };

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | undefined;
        if (message && message.text) {
            timeoutId = setTimeout(() => {
                setMessage(null);
            }, 3000);
        }
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [message]);

    return (
        <>
            <div>
                <Form onSubmit={handleSubmit} className="w-50 m-auto border shadow-sm my-5 px-3 py-4 mb-5 bg-body-tertiary rounded">
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
                            onChange={handleChange}
                            placeholder="Digite o preço"
                        />
                    </Form.Group>
                    <Form.Group controlId="formStockSize" className='d-flex my-2 align-items-center'>
                        <Form.Label className='col-3 text-end px-2 m-0'>Tamanho</Form.Label>
                        <Form.Control
                            type="text"
                            name="size"
                            value={formData.stock.size}
                            onChange={handleStockChange}
                            placeholder="P, M, G, GG, XG..."
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
                    <div className='d-flex flex-row-reverse my-3'>
                        <MainButton buttonText="Adicionar" onSubmit={handleAddProduct} />
                    </div>
                    {message && <MessageReturn text={message.text} variant={message.variant} />}
                </Form>
            </div>
        </>
    );
};

export default NovosProdutos;