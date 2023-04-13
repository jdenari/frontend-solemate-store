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
    const productShow = useSelector((state: RootState) => state.counter.productShow);
    const product = useSelector((state: RootState) => state.product.products[productShow]);

    return (
        <div className='p-3'>
            <SearchBar placeholder='O que você está procurando?' />
            <h2 className='p-1 m-0'>{product ? product.productName : ''}</h2>
            <p className={`lead mb-3 p-1`}>{product ? product.description : ''}</p>
            <div className='col-12 d-flex align-items-end'>
                <div className='position-relative'>
                    <img src={`http://localhost:5000/api/photos/${product ? product.id : ''}/photo`} alt="" className={`${styles.mainPhoto} text-center col-7 shadow p-3 bg-body-tertiary rounded w-100`}/>
                    <Counter className={styles.counter} />
                </div>
                <div className={`col-5 h-100`}>
                    <div className='d-flex flex-row-reverse align-items-center'>
                        <p className={`${styles.price} m-1 mb-0`}>{product ? product.price.toFixed(2) : 0}</p>
                        <p className={`${styles.currency} m-1 mb-0`}>R$</p>
                    </div>
                    <div className={`d-flex flex-row-reverse mx-1 ${styles.noWrap}`}>{product ? product.productName : ''}</div>
                    <div className='d-flex flex-row-reverse my-3 mx-1'>
                        <MainButton buttonText={`Add (${count})`}
                            imageUrl='./icons/cart.png' />
                        <SecondaryButton buttonText="Clean" 
                            imageUrl='./icons/eraser.png'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;



