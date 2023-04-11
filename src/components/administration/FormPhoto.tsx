import React, { useState } from 'react';
import axios from 'axios';

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

    const addPhoto = (photo: any) => {
        // aqui você pode manipular os dados da foto adicionada, se necessário
        console.log('Photo added:', photo);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="file" onChange={handleFileChange} />
            </div>
            <div>
                <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormPhoto;



