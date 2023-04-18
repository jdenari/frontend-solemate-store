import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { Table } from 'react-bootstrap';
import { Product } from '../../../store/types';
import styles from './InventoryDatabase.module.css';
import MessageReturn from '../../MessageReturn';
import axios from 'axios';

// component for rendering an editable table cell
const EditableCell = ({ value, onUpdate }: { value: string | number; onUpdate: (newValue: string) => void }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(value.toString());

    // function to handle updating the cell value
    const handleUpdate = () => {setIsEditing(false);onUpdate(editedValue);};

    return isEditing ? (
        <input
            type="text"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
            onBlur={handleUpdate}
            autoFocus
        />
    ) : (
        <div onClick={() => setIsEditing(true)}>{value}</div>
    );
};

const ProductTable = () => {
    const products = useSelector((state: RootState) => state.product.products);
    const [updatedProducts, setUpdatedProducts] = useState<Product[]>(products);
    const [message, setMessage] = useState<{ text: string; variant: string } | null>(null);

  
    // function to handle updating the product properties in the state
    const handleUpdate = (index: number, key: keyof Product, newValue: string | number) => {
        const updatedProduct = { ...updatedProducts[index], [key]: newValue };
        const newUpdatedProducts = [...updatedProducts];
        newUpdatedProducts[index] = updatedProduct;
        setUpdatedProducts(newUpdatedProducts);
    };

    // function to handle updating the stock quantity of the product in the state
    const handleStockQuantityUpdate = (index: number, newValue: number) => {
        const updatedProduct = {
          ...updatedProducts[index],
          stock: { ...updatedProducts[index].stock, quantity: newValue },
        };
        const newUpdatedProducts = [...updatedProducts];
        newUpdatedProducts[index] = updatedProduct;
        setUpdatedProducts(newUpdatedProducts);
    };


    
    // function to send the updated product to the server
    const updateProduct = async (product: Product) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/product/edit-product/${product.id}`, product);
            if (response.status === 200) {setMessage({ text: 'Produto atualizado com sucesso!', variant: 'success' });
            } else {setMessage({text: `Erro ao atualizar o produto: ${response.status} ${response.statusText}`,variant: 'danger',});}
        } catch (error) {setMessage({ text: 'Erro ao atualizar o produto: ' + error, variant: 'danger' });}
    };
    
    // effect to clear the message after a certain time
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
        <div className={`${styles.tableWrapper}`}>
            <h2 className='m-3 p-3 text-center'>Controle de Estoque</h2>
            <div className='m-3'>
                {message && <MessageReturn text={message.text} variant={message.variant} />}
            </div>
            <Table striped bordered hover className={`m-3 p-3 border bg-white border-bottom shadow-sm bg-body-tertiary text-center`}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Imagem</th>
                        <th>Produto</th>
                        <th>Classe</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                {updatedProducts.map((product: Product, index: number) => (
                    <tr key={product.id}>
                        <td className="align-middle text-center">
                            <EditableCell value={product.id} onUpdate={(newValue) => console.log('Updated ID:', newValue)} />
                        </td>
                        <td>
                            <img src={`http://localhost:5000/api/photos/${product.id}/photo`} alt="" className={`${styles.imageTable} shadow p-1 bg-body-tertiary rounded`}/>
                        </td>
                        <td className="align-middle text-center">
                            <EditableCell
                                value={product.productName}
                                onUpdate={(newValue) => handleUpdate(index, 'productName', newValue)}
                            />
                            </td>
                        <td className="align-middle text-center">
                            <EditableCell
                                value={product.productClass}
                                onUpdate={(newValue) => handleUpdate(index, 'productClass', newValue)}
                            />
                        </td>
                        <td className="align-middle text-center">
                            <EditableCell
                                value={product.description}
                                onUpdate={(newValue) => handleUpdate(index, 'description', newValue)}
                            />
                        </td>
                        <td className="align-middle text-center">
                            <EditableCell
                                value={product.price}
                                onUpdate={(newValue) => handleUpdate(index, 'price', newValue)}
                            />
                        </td>

                        <td className="align-middle text-center">
                            <EditableCell
                                value={product.stock.quantity}
                                onUpdate={(newValue) => handleStockQuantityUpdate(index, parseInt(newValue))}
                            />
                        </td>
                        <td className="align-middle px-4">
                            <button
                                className={`${styles.buttonQuantity} btn btn-sm btn-outline-success`}
                                onClick={() => updateProduct(product)}
                            >
                                Atualizar
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ProductTable

