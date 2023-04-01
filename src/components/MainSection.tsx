import React from 'react';
import styles from './MainSection.module.css';
import Counter from './Counter';
import MainButton from './MainButton';
import SecondaryButton from './SecondaryButton';

const MainSection = () => {
    return (
        <div className='p-3'>
            <h2 className='p-1'>Title Shoes</h2>
            <p className='lead m-0 p-1'>Non autem velit et galisum voluptatum sit harum neque vel magnam nulla At incidunt accusantium est quia accusantium. </p>
            <div className='d-flex p-1'>
                <p className={`${styles.featuresBox} px-1 me-1`}>7-10 day shipping</p>
                <p className={`${styles.featuresBox} px-1 me-1`}>30 day trial</p>
            </div>
            <div className="position-relative text-center">
                <Counter className="position-absolute top-0 start-0" />
                <img src="./shoes/shoes-01.png" alt="" className='text-center'/>
                <div className={`position-absolute top-100 start-100 ${styles.priceContainer} d-flex align-items-end`}>
                    <p className={`${styles.currency} m-0 mb-0`}>R$</p>
                    <p className={`${styles.price} m-0 mb-0`}>10000</p>
                </div>
            </div>
            <div className='d-flex flex-row-reverse'>
                <MainButton buttonText="Add (1) Cart" />
                <SecondaryButton buttonText="Clean" />
            </div>
        </div>
    );
};

export default MainSection;