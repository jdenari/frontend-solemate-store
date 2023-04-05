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

    return (
        <div className='p-3'>
            <SearchBar placeholder='O que você está procurando?' />
            <h2 className='p-1'>Title Shoes</h2>
            <p className='lead m-0 p-1'>Non autem velit et galisum voluptatum sit harum neque vel magnam nulla At incidunt accusantium est quia accusantium. </p>
            <div className='d-flex p-1'>
                <p className={`${styles.featuresBox} px-1 me-1`}>7-10 day shipping</p>
                <p className={`${styles.featuresBox} px-1 me-1`}>30 day trial</p>
            </div>
            <div className="position-relative text-center">
                <Counter className="position-absolute top-0 start-0" />
                <img src="./shoes/shoes-01.png" alt="" className='text-center'/>
                <div className={`position-absolute top-100 start-100 ${styles.priceContainer}`}>
                    <div className='d-flex align-items-center'>
                        <p className={`${styles.currency} m-1 mb-0`}>R$</p>
                        <p className={`${styles.price} m-1 mb-0`}>10000</p>
                    </div>
                    <div className="d-flex flex-row-reverse m-1">Title Shoes</div>
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
