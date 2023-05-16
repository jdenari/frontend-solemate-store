// patterns imports
import React, { useState, useEffect } from 'react';
import styles from './MainSection.module.css';
import { useSelector, useDispatch } from 'react-redux';

// child components imports
import SearchBar from './SearchBar';
import Counter from '../Counter';
import SolemateModal from '../SolemateModal';
import SolemateButton from '../SolemateButton';
import MessageReturn from '../MessageReturn';

// actions imports
import { RootState } from '../../store/types';
import { DECREMENT_PRODUCT_SHOW, INCREMENT_PRODUCT_SHOW, ADD_PRODUCT_TO_CART, CLEAN_CART, SET_MESSAGE, CLEAR_MESSAGE } from '../../store/actions';


const MainSection = () => {
    // data constants
    const dispatch = useDispatch();
    const message = useSelector((state: RootState) => state.returnMessage);

        // count
    const count = useSelector((state: RootState) => state.counter.count);

        // products
    const productShow = useSelector((state: RootState) => state.counter.productShow);
    const product = useSelector((state: RootState) => state.product.products[productShow]);
    const products = useSelector((state: RootState) => state.product.products);

        // modals
    const [showModal, setShowModal] = useState(false);


    // functions to deal to cart
    const handleAddProductToCart = () => {
        dispatch(ADD_PRODUCT_TO_CART({ product, count }));
        dispatch(SET_MESSAGE({ text: `${product.productName} foi adicionado ao carrinho.`, variant: 'success'}));
        setTimeout(() => { dispatch(CLEAR_MESSAGE());}, 3000);
    };
    const handleCleanCart = () => {dispatch(CLEAN_CART());setShowModal(false);};

    // functions to activate and deactivate modal
    const handleOpenModal = () => {setShowModal(true);};
    const handleCloseModal = () => {setShowModal(false);};

    return (
        <div className='p-3'>
            <SearchBar placeholder='What are you looking for?' />
            <div className='d-flex'>
                <div className='col-12'>
                    <h2 className={`${styles.titleProduct} p-1 m-0`}>{product ? product.productName : ''}</h2>
                    <p className={`lead p-1 m-0`}>{product ? product.description : ''}</p>
                </div>
            </div>
            <div className={`col-12 d-flex flex-column`}>
                <div className='d-flex'>
                    <div className='d-flex flex-row mb-4 my-3 col-9'>
                        <div className='d-flex'>
                            <SolemateButton buttonText="Clean" 
                                imageUrl='./icons/eraser.png'
                                onClick={handleOpenModal}
                                variant='light'
                            />
                            <SolemateButton buttonText={`Add (${count})`}
                                imageUrl='./icons/cart.png' 
                                onClick={handleAddProductToCart}
                                variant='purple'
                            />
                        </div>
                    </div>
                    <div className='col-3 px-4'>
                        <div className='d-flex flex-row-reverse align-items-center col-12'>
                            <p className={`${styles.price} m-1 mb-0`}>{product ? product.price.toFixed(2) : 0}</p>
                            <p className={`${styles.currency} m-1 mb-0`}>R$</p>
                        </div>
                        <div className={`d-flex flex-row-reverse mx-1 ${styles.noWrap}`}>{product ? product.productName : ''}</div>
                    </div>
                </div>
            </div>
            <div className='col-12 d-flex'>
                <div className='position-relative col-9 my-3 mx-auto mx-md-0'>
                    <img src={`http://localhost:5000/api/photos/${product ? product.id : ''}/photo`} alt="" className={`${styles.mainPhoto} text-center shadow p-3 bg-body-tertiary rounded w-100`}/>
                    <Counter className={styles.counter} />
                    <div className={`${styles.arrow} d-flex position-absolute`}>
                        <SolemateButton
                            imageUrl='./icons/arrow-left-short.svg'
                            onClick={() => dispatch(DECREMENT_PRODUCT_SHOW(1))}
                            variant='light'
                        />
                        <SolemateButton
                            imageUrl='./icons/arrow-right-short.svg'
                            onClick={() => dispatch(INCREMENT_PRODUCT_SHOW(products.length))}
                            variant='light'
                        />
                    </div>
                </div>
            </div>
            <div className='m-3 mt-5'>
                {message.message && <MessageReturn text={message.message.text} variant={message.message.variant} />}
            </div>
            <SolemateModal 
                show={showModal} 
                handleClose={handleCloseModal} 
                handleYes={handleCleanCart}
                text='Are you sure you want to clear your cart?'
                title='Clear Cart'
            />
        </div>
    );
};

export default MainSection;



