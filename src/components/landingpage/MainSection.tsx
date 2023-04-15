import React, { useState, useEffect } from 'react';
import styles from './MainSection.module.css';
import SearchBar from './SearchBar';
import Counter from '../Counter';
import CustomModal from '../CustomModal';
import MainButton from '../MainButton';
import MessageReturn from '../MessageReturn';
import SecondaryButton from '../SecondaryButton';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/types';
import { decrementProductShow, incrementProductShow, addProductToCart, clearCart} from '../../store/actions';


const MainSection = () => {
    const count = useSelector((state: RootState) => state.counter.count);
    const productShow = useSelector((state: RootState) => state.counter.productShow);
    const product = useSelector((state: RootState) => state.product.products[productShow]);
    const products = useSelector((state: RootState) => state.product.products);

    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState<{ text: string; variant: string } | null>(null);

    const dispatch = useDispatch();

    const handleAddProductToCart = () => {
        dispatch(addProductToCart(product));
        setMessage({ text: `${product.productName} foi adicionado ao carrinho.`, variant: 'success' });
    };
    
    const handleCleanCart = () => {dispatch(clearCart());setShowModal(false);};

    const handleOpenModal = () => {setShowModal(true);};
    const handleCloseModal = () => {setShowModal(false);};

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
        <div className='p-3'>
            <SearchBar placeholder='O que você está procurando?' />
            <div className='d-flex mb-3'>
                <div className='col-12'>
                    <h2 className={`${styles.titleProduct} p-1 m-0`}>{product ? product.productName : ''}</h2>
                    <p className={`lead p-1 m-0`}>{product ? product.description : ''}</p>
                </div>
            </div>
            <div className='col-12 d-flex'>
                <div className='position-relative'>
                    <img src={`http://localhost:5000/api/photos/${product ? product.id : ''}/photo`} alt="" className={`${styles.mainPhoto} text-center shadow p-3 bg-body-tertiary rounded w-100`}/>
                    <Counter className={styles.counter} />
                    <div className={`${styles.arrow} d-flex position-absolute`}>
                            <SecondaryButton
                                imageUrl='./icons/arrow-left-short.svg'
                                onClick={() => dispatch(decrementProductShow(1))}
                            />
                            <SecondaryButton
                                imageUrl='./icons/arrow-right-short.svg'
                                onClick={() => dispatch(incrementProductShow(products.length))}
                            />
                    </div>
                </div>
                <div className={`col-4 d-flex align-items-end flex-column`}>
                    <div className='mb-auto p-2'></div>
                    <div className=''>
                        <div className='d-flex flex-row-reverse align-items-center'>
                            <p className={`${styles.price} m-1 mb-0`}>{product ? product.price.toFixed(2) : 0}</p>
                            <p className={`${styles.currency} m-1 mb-0`}>R$</p>
                        </div>
                        <div className={`d-flex flex-row-reverse mx-1 ${styles.noWrap}`}>{product ? product.productName : ''}</div>
                        <div className='d-flex flex-row-reverse my-3 mx-1'>
                            <MainButton buttonText={`Add (${count})`}
                                imageUrl='./icons/cart.png' 
                                onClick={handleAddProductToCart}
                                />
                            <SecondaryButton buttonText="Clean" 
                                imageUrl='./icons/eraser.png'
                                onClick={handleOpenModal}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='m-3 mt-5'>
                {message && <MessageReturn text={message.text} variant={message.variant} />}
            </div>
            <CustomModal 
                show={showModal} 
                handleClose={handleCloseModal} 
                handleYes={handleCleanCart}
                text='Você tem certeza que quer limpar seu carrinho?'
                title='Limpar Carrinho'
            />
        </div>
    );
};

export default MainSection;



