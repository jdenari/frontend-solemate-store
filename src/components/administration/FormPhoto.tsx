import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';

const FormPhoto = () => {
    const [photo, setPhoto] = useState<File | null>(null);
    const [name, setName] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', photo!);
        formData.append('name', name);

        try {
            const response = await axios.post('http://localhost:5000/api/photos/add-photos', formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            });
            console.log(response.data);
            setPhoto(null);
            setName('');
        } catch (error) {
            console.error(error);
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files![0];
        setPhoto(selectedFile);
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }


    return (
        <Form onSubmit={handleSubmit} className='d-flex my-2 align-items-center'>
            <Form.Group controlId="formImage" className='d-flex my-2 align-items-center'>
                <Form.Label className='col-3 text-end px-2 m-0'>Imagem</Form.Label>
                <Form.Control
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    accept="image/*"
                />
            </Form.Group>
            <Form.Group controlId="formName" className='d-flex my-2 align-items-center'>
                <Form.Label className='col-3 text-end px-2 m-0'>Name:</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                />
            </Form.Group>
            <button type="submit" className="btn btn-primary my-2 mx-3">Submit</button>
        </Form>
    );
}

export default FormPhoto;


