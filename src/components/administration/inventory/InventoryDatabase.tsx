import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { Table } from 'react-bootstrap';
import { Product, Stock} from '../../../store/types';
import styles from './InventoryDatabase.module.css';
import { SET_MESSAGE, CLEAR_MESSAGE } from '../../../store/actions';
import MessageReturn from '../../MessageReturn';
import axios from 'axios';

import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';

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
    const stocks = useSelector((state: RootState) => state.stock.stocks);
    const [updatedProducts, setUpdatedProducts] = useState<Product[]>(products);
    const [updatedStocks, setUpdatedStocks] = useState<Stock[]>(stocks);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const [previewImageUrls, setPreviewImageUrls] = useState<Record<string, string>>({});
    const [editingProductIndex, setEditingProductIndex] = useState<number | null>(null);

    const dispatch = useDispatch();
    const message = useSelector((state: RootState) => state.returnMessage);

    // cropper image
    const [cropper, setCropper] = useState<Cropper | null>(null);
    const [croppedImage, setCroppedImage] = useState<Blob | null>(null);
    const imgRef = useRef<any>(null);
    const [photo, setPhoto] = useState<File | null>(null);
    const [imageName, setImageName] = useState<string>('');
    const [showCropper, setShowCropper] = useState(false);

    // cuts the image using Cropper.js library and sets the cropped image as state
    const handleCropImage = () => {
        const cropper = imgRef.current?.cropper;
        if (cropper && editingProductIndex !== null) {
            cropper.getCroppedCanvas().toBlob((blob: Blob | null) => {
                if (blob) {
                    setCroppedImage(blob);
                    const newPreviewImageUrls = { ...previewImageUrls };
                    newPreviewImageUrls[updatedProducts[editingProductIndex].id] = URL.createObjectURL(blob);
                    setPreviewImageUrls(newPreviewImageUrls);
                    setShowCropper(false);
                }
            }, "image/jpeg");
        }
        setPhoto(null)
    };
    
  
    // function to handle updating the product properties in the state
    const handleUpdate = (index: number, key: keyof Product, newValue: string | number) => {
        const updatedProduct = { ...updatedProducts[index], [key]: newValue };
        const newUpdatedProducts = [...updatedProducts];
        newUpdatedProducts[index] = updatedProduct;
        setUpdatedProducts(newUpdatedProducts);
    };

    const SelectCell = ({
        value,
        options,
        onUpdate
    }: {
        value: string;
        options: string[];
        onUpdate: (newValue: string) => void;
    }) => {
        return (
            <select value={value} onChange={(e) => onUpdate(e.target.value)}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        );
    };

    // update the image
    const handleFileChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files![0];
        setPhoto(selectedFile);
        setShowCropper(true);
        setEditingProductIndex(index);
        setImageName(selectedFile.name); // Adicione esta linha
    };
        
    const handleStockQuantityUpdate = (index: number, newValue: number) => {
        // Encontre o índice do objeto Stock que corresponde ao productId do produto sendo atualizado
        const stockIndex = updatedStocks.findIndex(stock => stock.productId === updatedProducts[index].id);
    
        // Verifique se o objeto Stock foi encontrado
        if (stockIndex !== -1) {
            // Atualize a quantidade do objeto Stock encontrado
            const updatedStock = { ...updatedStocks[stockIndex], quantity: newValue };
    
            // Atualize o estado de updatedStocks com o novo objeto Stock atualizado
            const newUpdatedStocks = [...updatedStocks];
            newUpdatedStocks[stockIndex] = updatedStock;
            setUpdatedStocks(newUpdatedStocks);
        }
    };

    const handleStockSizeUpdate = (index: number, newValue: string) => {
        const stockIndex = updatedStocks.findIndex(stock => stock.productId === updatedProducts[index].id);
    
        if (stockIndex !== -1) {
            const updatedStock = { ...updatedStocks[stockIndex], size: newValue };
    
            const newUpdatedStocks = [...updatedStocks];
            newUpdatedStocks[stockIndex] = updatedStock;
            setUpdatedStocks(newUpdatedStocks);
        }
    };

    const updateProduct = async (product: Product) => {
        try {
            // Encontre o objeto Stock correspondente no estado updatedStocks
            const updatedStock = updatedStocks.find(stock => stock.productId === product.id);
    
            if (updatedStock) {
                const formData = new FormData();
                formData.append('productData', JSON.stringify({
                    ...product,
                    quantity: updatedStock.quantity,
                    size: updatedStock.size,
                }));

                if (croppedImage) {
                    formData.append('file', croppedImage, imageName);
                }
    
                const response = await axios.put(`http://localhost:5000/api/product/edit-product/${product.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
    
                if (response.status === 200) {
                    dispatch(SET_MESSAGE({ text: 'Produto e estoque atualizados com sucesso!', variant: 'success'}));
                    setTimeout(() => { dispatch(CLEAR_MESSAGE());}, 3000);
                } else {
                    dispatch(SET_MESSAGE({ text: `Erro ao atualizar o produto e estoque: ${response.status} ${response.statusText}`, variant: 'danger'}));
                    setTimeout(() => { dispatch(CLEAR_MESSAGE());}, 3000);
                }
            } else {
                dispatch(SET_MESSAGE({ text: 'Erro ao encontrar o produto!', variant: 'danger'}));
                setTimeout(() => { dispatch(CLEAR_MESSAGE());}, 3000);
            }
        } catch (error) {
            dispatch(SET_MESSAGE({ text: 'Erro ao atualizar o produto e estoque: ' + error, variant: 'danger'}));
            setTimeout(() => { dispatch(CLEAR_MESSAGE());}, 3000);
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
        <div>
            <h2 className='m-3 p-3 text-center'>Controle de Estoque</h2>
            {photo && (
                <div>
                    <div className='d-flex my-2 align-items-center'>
                        <img ref={imgRef} src={URL.createObjectURL(photo)} alt={imageName} className="col-3"/>
                    </div>
                    <button type="button" className="btn btn-secondary" onClick={handleCropImage}>
                        Cortar Imagem
                    </button>
                </div>
            )}
            <div className={`${styles.tableWrapper}`}>
                <div className='m-3'>
                    {message.message && <MessageReturn text={message.message.text} variant={message.message.variant} />}
                </div>
                <Table striped bordered hover className={`m-3 p-3 border bg-white border-bottom shadow-sm bg-body-tertiary text-center`}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Imagem</th>
                            <th>Produto</th>
                            <th>Status</th>
                            <th>Classe</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Tamanho</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody className={`${styles.tableBody}`}>
                    {updatedProducts.map((product: Product, index: number) => (
                        <tr key={product.id}>
                            <td className="align-middle text-center">
                                <EditableCell value={product.id} onUpdate={(newValue) => console.log('Updated ID:', newValue)} />
                            </td>
                            <td className="align-middle d-flex">
                                <div className="d-flex align-items-center">
                                    <img
                                        src={
                                            previewImageUrls[product.id]
                                            ? previewImageUrls[product.id]
                                            : `http://localhost:5000/api/photos/${product.id}/photo`
                                        }
                                        alt=""
                                        className={`${styles.imageTable} shadow p-1 bg-body-tertiary rounded`}
                                    />
                                        <div className={`${styles.fileInputWrapper}`}>
                                            <label htmlFor={`formImage-${index}`} className={`${styles.fileInputLabel} ${styles.customFileUpload} ${styles.imageTable} align-items-center border m-2 shadow-sm p-1 bg-body-tertiary rounded`}>
                                                Trocar arquivo
                                            </label>
                                            <input
                                                type="file"
                                                id={`formImage-${index}`}
                                                name="image"
                                                onChange={(e) => handleFileChange(index, e)}
                                                accept="image/*"
                                                style={{ display: 'none' }}
                                            />
                                        </div>
                                </div>
                            </td>
                            <td className="align-middle text-center">
                                <EditableCell
                                    value={product.productName}
                                    onUpdate={(newValue) => handleUpdate(index, 'productName', newValue)}
                                />
                            </td>
                            <td className="align-middle text-center">
                                <SelectCell
                                    value={product.statusProduct}
                                    options={['ATIVO', 'DESATIVADO']}
                                    onUpdate={(newValue) => handleUpdate(index, 'statusProduct', newValue)}
                                />
                            </td>
                            <td className="align-middle text-center">
                                <SelectCell
                                    value={product.productClass}
                                    options={['Corrida', 'Casual', 'Futebol', 'Skate', 'Treinamento']}
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
                                    value={updatedStocks.find(stock => stock.productId === product.id)?.quantity || 0}
                                    onUpdate={(newValue) => handleStockQuantityUpdate(index, parseInt(newValue))}
                                />
                            </td>

                            <td className="align-middle text-center">
                                <EditableCell
                                    value={updatedStocks.find(stock => stock.productId === product.id)?.size || ''}
                                    onUpdate={(newValue) => handleStockSizeUpdate(index, newValue)}
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
        </div>
    );
};

export default ProductTable

