// patterns imports
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styles from './InventoryDatabase.module.css';
import { Table } from 'react-bootstrap';

// actions imports
import { RootState } from '../../../store/rootReducer';
import { Product, Stock} from '../../../store/types';
import { SET_MESSAGE, CLEAR_MESSAGE } from '../../../store/actions';

// components imports
import MessageReturn from '../../MessageReturn';
import SolemateButton from '@/components/SolemateButton';
import EditableCell from './EditableCell';
import SelectCell from './SelectCell'; 
import SolemateModal from '@/components/SolemateModal';

// cropper imports
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';

const InventoryDatabase = () => {
    const dispatch = useDispatch();
    
    // products from database
    const products = useSelector((state: RootState) => state.product.products);
    const [updatedProducts, setUpdatedProducts] = useState<Product[]>(products);

    // stocks from database
    const stocks = useSelector((state: RootState) => state.stock.stocks);
    const [updatedStocks, setUpdatedStocks] = useState<Stock[]>(stocks);

    // variables to message return
    const message = useSelector((state: RootState) => state.returnMessage);
    const categories = useSelector((state: RootState) => state.category.categories);

    const categoryOptions = categories.map((category) => category.category);
    const categoryIdMap = categories.reduce((acc, category) => {
        acc[category.category] = category.id;
        return acc;
    }, {} as { [key: string]: number });

    const categoryNameMap = categories.reduce((acc, category) => {
        acc[category.id] = category.category;
        return acc;
    }, {} as { [key: number]: string });
    


    // images variables
    const imgRef = useRef<any>(null);
    const [photo, setPhoto] = useState<File | null>(null);
    const [imageName, setImageName] = useState<string>('');

    // variables to change the lines
    const [previewImageUrls, setPreviewImageUrls] = useState<Record<string, string>>({});
    const [editingProductIndex, setEditingProductIndex] = useState<number | null>(null);
    const [changedRows, setChangedRows] = useState<Set<number>>(new Set());

    // cropper variables
    const [cropper, setCropper] = useState<Cropper | null>(null);
    const [croppedImage, setCroppedImage] = useState<Blob | null>(null);
    const [showCropper, setShowCropper] = useState(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [productIdToDelete, setProductIdToDelete] = useState<number | null>(null);
    const handleDeleteModal = (productId: number) => {
        // Salve o productId do produto a ser excluído no estado
        setProductIdToDelete(productId);
    
        // Mostre o modal de exclusão
        setShowDeleteModal(true);
    };
    

    // function to cut the imagem from the cropper.js
    const handleCropImage = () => {

        // get the reference to the cropper object
        const cropper = imgRef.current?.cropper;

        // check if the cropper object exists and if a product is being edited
        if (cropper && editingProductIndex !== null) {
            cropper.getCroppedCanvas().toBlob((blob: Blob | null) => {
                if (blob) {
                    // update the croppedimage with the blob
                    setCroppedImage(blob);

                    // collects the url image, update the url with the blob and update the image url
                    const newPreviewImageUrls = { ...previewImageUrls };
                    newPreviewImageUrls[updatedProducts[editingProductIndex].id] = URL.createObjectURL(blob);
                    setPreviewImageUrls(newPreviewImageUrls);

                    // hides the cropper space;
                    setShowCropper(false);
                }
            }, "image/jpeg");
        }
        setPhoto(null)
    };
    
    // it receives the product index, the key of the product attribute and new value
    const handleUpdate = (index: number, key: keyof Product, newValue: string | number) => {
        
        // edit the table object with new value
        const updatedProduct = { ...updatedProducts[index], [key]: newValue };
        const newUpdatedProducts = [...updatedProducts];
        newUpdatedProducts[index] = updatedProduct;

        // update the updatedProducts state with the new newUpdatedProducts array
        setUpdatedProducts(newUpdatedProducts);
    
        // update the variables to the button 'update' activate
        setChangedRows((prevChangedRows) => new Set([...prevChangedRows, index]));
    };

    // is used to handle selecting a new product image.
    const handleFileChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        // extract the imagem from files
        const selectedFile = e.target.files![0];

        // activate cropper and editing
        setPhoto(selectedFile);
        setShowCropper(true);
        setEditingProductIndex(index);

        // update the name image
        setImageName(selectedFile.name);

        // update the variables to the button 'update' activate
        setChangedRows((prevChangedRows) => new Set([...prevChangedRows, index]));
    };

    const handleStockUpdate = (index: number, key: keyof Stock, newValue: string | number) => {
        // find the index of the Stock object that corresponds to the productId of the product being updated
        const stockIndex = updatedStocks.findIndex(stock => stock.productId === updatedProducts[index].id);
    
        if (stockIndex !== -1) {
            // update the quantity of the Stock object found
            const updatedStock = { ...updatedStocks[stockIndex], [key]: newValue };
    
            // update the state of updatedStocks with the new updated Stock object
            const newUpdatedStocks = [...updatedStocks];
            newUpdatedStocks[stockIndex] = updatedStock;
            setUpdatedStocks(newUpdatedStocks);
        }
    
        // update the variables to the button 'update' activate
        setChangedRows((prevChangedRows) => new Set([...prevChangedRows, index]));
    };
    
    const updateProduct = async (product: Product) => {
        try {
            // find the corresponding updatedStock object or use default values
            const updatedStock = updatedStocks.find(stock => stock.productId === product.id) || { quantity: 0, size: '' };
            
            // create FormData object to hold product data
            const formData = new FormData();
            formData.append('productData', JSON.stringify({...product,quantity: updatedStock.quantity,size: updatedStock.size,}));
            if (croppedImage) {formData.append('file', croppedImage, imageName);}
    
            // request a put action
            const response = await axios.put(`http://localhost:5000/api/product/edit-product/${product.id}`, formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            });
            const messageText = response.data;
    
            if (response.status === 200) {
                dispatch(SET_MESSAGE({ text: messageText, variant: 'success'}));
                setTimeout(() => { dispatch(CLEAR_MESSAGE());}, 3000);
                // deactivate the button to update the line
                setChangedRows(new Set());
            } else {
                dispatch(SET_MESSAGE({ text: messageText, variant: 'danger'}));
                setTimeout(() => { dispatch(CLEAR_MESSAGE());}, 3000);
            }
        } catch (error) {
            const messageText = 'Error updating product and stock:' + error;
            dispatch(SET_MESSAGE({ text: messageText, variant: 'danger'}));
            setTimeout(() => { dispatch(CLEAR_MESSAGE());}, 3000);
        }
    };

    const deleteProduct = async (productId: number) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/product/delete-product/${productId}`);
            const messageText = response.data;

            if (response.status === 200) {
                setUpdatedProducts(updatedProducts.filter(product => product.id !== productId));
                setUpdatedStocks(updatedStocks.filter(stock => stock.productId !== productId));
    
                dispatch(SET_MESSAGE({ text: messageText, variant: 'success'}));
                setTimeout(() => { dispatch(CLEAR_MESSAGE());}, 3000);
            } else {
                dispatch(SET_MESSAGE({ text: messageText, variant: 'danger'}));
                setTimeout(() => { dispatch(CLEAR_MESSAGE());}, 3000);
            }
        } catch (error) {
            const messageText = 'Error updating product and stock:' + error;
            dispatch(SET_MESSAGE({ text: messageText, variant: 'danger'}));
            setTimeout(() => { dispatch(CLEAR_MESSAGE());}, 3000);
        }
    };
    
    
    // initializes cropper.js on the photo once it is loaded
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
            <h2 className='m-3 p-3 text-center'>Inventory Control</h2>
            {photo && (
                <div className='border w-50 p-3 m-auto border shadow-sm bg-body-tertiary text-center'>
                    <div className='d-flex align-items-center cropper-container p-3'> 
                        <img ref={imgRef} src={URL.createObjectURL(photo)} alt={imageName} className="col-3 w-50"/>
                    </div>
                    <div className='d-flex flex-row-reverse p-3'>
                        <SolemateButton 
                            buttonText="Cut Image" 
                            variant='purple'
                            onClick={handleCropImage}
                        />
                        <SolemateButton 
                            buttonText="Clean"
                            variant='light'
                        />
                    </div>
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
                            <th>Image</th>
                            <th>Product</th>
                            <th>Status</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Size</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className={`${styles.tableBody}`}>
                    {updatedProducts.map((product: Product, index: number) => (
                        <tr key={product.id}>
                            <td className={`${styles.columnTable} align-middle text-center`}>
                                <span>{product.id}</span>
                            </td>
                            <td className={`${styles.columnTable} align-middle text-center`}>
                                <div className="d-flex align-items-center m-auto text-center w-100 justify-content-center">
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
                                            Change Image
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
                            <td className={`${styles.columnTable} align-middle text-center`}>
                                <EditableCell
                                    value={product.productName}
                                    onUpdate={(newValue) => handleUpdate(index, 'productName', newValue)}
                                />
                            </td>
                            <td className={`${styles.columnTable} align-middle text-center`}>
                                <SelectCell
                                    value={product.statusProduct}
                                    options={['ACTIVE', 'DEACTIVE']}
                                    onUpdate={(newValue) => handleUpdate(index, 'statusProduct', newValue)}
                                />
                            </td>
                            <td className={`${styles.columnTable} align-middle text-center`}>
                                <SelectCell
                                    value={categoryNameMap[Number(product.categoryId)]}
                                    options={categoryOptions}
                                    onUpdate={(newValue) =>
                                        handleUpdate(index, 'categoryId', categoryIdMap[newValue as string])
                                    }
                                />
                            </td>
                            <td className={`${styles.columnTable} align-middle text-center`}>
                                <EditableCell
                                    value={product.description}
                                    onUpdate={(newValue) => handleUpdate(index, 'description', newValue)}
                                    inputStyle={{ height: '90px', width: '90%' }}
                                />
                            </td>

                            <td className={`${styles.columnTable} align-middle text-center`}>
                                <EditableCell
                                    value={product.price}
                                    onUpdate={(newValue) => handleUpdate(index, 'price', newValue)}
                                />
                            </td>

                            <td className={`${styles.columnTable} align-middle text-center`}>
                                <EditableCell
                                    value={updatedStocks.find(stock => stock.productId === product.id)?.quantity || 0}
                                    onUpdate={(newValue) => handleStockUpdate(index, 'quantity', parseInt(newValue))}
                                />
                            </td>

                            <td className={`${styles.columnTable} align-middle text-center`}>
                                <EditableCell
                                    value={updatedStocks.find(stock => stock.productId === product.id)?.size || ''}
                                    onUpdate={(newValue) => handleStockUpdate(index, 'size', newValue)}
                                />
                            </td>

                            <td className={`${styles.columnTable} align-middle text-center`}>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <button
                                        className={`${styles.buttonQuantity} p-2 mx-2 shadow-sm bg-body-tertiary rounded-4 d-flex justify-content-center align-items-center`}
                                        onClick={() => updateProduct(product)}
                                        disabled={!changedRows.has(index)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className={`btn btn-close ms-4`}
                                        onClick={() => handleDeleteModal(product.id)}
                                        type="button"
                                    >
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
            <SolemateModal
                show={showDeleteModal}
                handleClose={() => setShowDeleteModal(false)}
                handleYes={() => {
                    if (productIdToDelete !== null) {
                        deleteProduct(productIdToDelete);
                    }
                    setShowDeleteModal(false);
                }}
                title="Excluir produto"
                text="Tem certeza de que deseja excluir este produto? Esta ação não pode ser desfeita."
            />
        </div>
    );
};

export default InventoryDatabase

