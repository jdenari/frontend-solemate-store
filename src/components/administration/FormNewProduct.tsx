import React, { useState } from 'react';
import MainButton from '../MainButton';
import { Form } from 'react-bootstrap';
import axios from 'axios';

interface IFormData {
    productClass: string;
    productName: string;
    description: string;
    price: number;
    stock: {
        size: string;
        quantity: number;
    };
    image?: File;
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

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value,
    }));
};

const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        stock: {
            ...prevState.stock,
            [name]: value,
        },
    }));
};

const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/product/add-product', formData);
      console.log('Dados enviados para o servidor:', response.data);
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
}


    return (
        <>
            <Form onSubmit={handleSubmit} className="w-50 m-auto border shadow-sm my-5 px-3 py-4 mb-5 bg-body-tertiary rounded">
                <h2 className="text-center mb-5">Adicionar Produto</h2>
                
                    <Form.Group controlId="formClass" className='d-flex my-2 align-items-center'>
                        <Form.Label className='col-3 text-end px-2 m-0'>Classe</Form.Label>
                        <Form.Control
                            type="text"
                            name="productClass"
                            value={formData.productClass}
                            onChange={handleChange}
                            placeholder="Calçado, Jeans, Blusa"
                        />
                    </Form.Group>
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

                <Form.Group controlId="formStockQuantity" className='d-flex my-2 align-items-center'>
                    <Form.Label className='col-3 text-end px-2 m-0'>Quantidade</Form.Label>
                    <Form.Control
                        type="number"
                        min="0"
                        name="quantity"
                        value={formData.stock.quantity}
                        onChange={handleStockChange}
                        placeholder="Digite a quantidade em estoque"
                    />
                </Form.Group>

                <Form.Group controlId="formImage" className='d-flex my-2 align-items-center'>
                    <Form.Label className='col-3 text-end px-2 m-0'>Imagem</Form.Label>
                    <Form.Control
                        type="file"
                        name="image"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (e.target.files && e.target.files.length > 0) {
                                setSelectedImage(e.target.files[0]);
                            }
                        }}
                        accept="image/*"
                    />
                </Form.Group>


                <div className='d-flex flex-row-reverse my-3'>
                    <MainButton buttonText="Adicionar" onSubmit={handleSubmit} />
                </div>
            </Form>
        </>
    );
};

export default NovosProdutos;