import React from 'react';
import styles from './MainSection.module.css';
import SearchBar from './SearchBar';
import Counter from '../Counter';
import MainButton from '../MainButton';
import SecondaryButton from '../SecondaryButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';

const MainSection = () => {
    const count = useSelector((state: RootState) => state.counter.count);
    const product = useSelector((state: RootState) => state.product.products[0]);

    return (
        <div className='p-3'>
            <SearchBar placeholder='O que você está procurando?' />
            <h2 className='p-1'>{product ? product.productName : ''}</h2>
            <p className={`lead m-0 p-1`}>{product ? product.description : ''}</p>
            <div className='d-flex p-1'>
                <p className={`${styles.featuresBox} px-1 me-1`}>7-10 day shipping</p>
                <p className={`${styles.featuresBox} px-1 me-1`}>30 day trial</p>
            </div>
            <div className="position-relative text-center">
                <Counter className="position-absolute top-0 start-0" />
                <img src="./shoes/shoes-00.png" alt="" className='text-center'/>
                <div className={`position-absolute top-100 start-100 ${styles.priceContainer}`}>
                    <div className='d-flex flex-row-reverse align-items-center'>
                        <p className={`${styles.price} m-1 mb-0`}>{product ? product.price.toFixed(2) : 0}</p>
                        <p className={`${styles.currency} m-1 mb-0`}>R$</p>
                    </div>
                    <div className={`d-flex flex-row-reverse mx-1 ${styles.noWrap}`}>{product ? product.productName : ''}</div>
                </div>
            </div>
            <div className='d-flex flex-row-reverse'>
                <MainButton buttonText={`Add (${count})`}
                    imageUrl='./icons/cart.png' />
                <SecondaryButton buttonText="Clean" 
                    imageUrl='./icons/eraser.png'
                />
            </div>
        </div>
    );
};

export default MainSection;


