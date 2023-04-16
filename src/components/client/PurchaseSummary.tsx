import React from 'react';
import MainButton from '../MainButton'
import styles from './PurchaseSummary.module.css';

type PurchaseSummaryProps = {
    title: string;
    items: string[];
    prices: number[];
    total: number;
};

const PurchaseSummary: React.FC<PurchaseSummaryProps> = ({ title, items, prices, total}) => {
    return (
        <div className={`${styles.bgLightWhite} container d-flex justify-content-center my-3 m-auto`}>
            <div className="col-5 p-5">
                <h5>{title}</h5>
                <hr />
                {items.map((item, index) => (
                    <div key={index} className="d-flex justify-content-between">
                        <span>{item}</span>
                        <span className=''>{prices[index]}</span>
                    </div>
                ))}
                <hr />
                <div className="d-flex justify-content-between">
                    <span>Total:</span>
                    <span>{total}</span>
                </div>
            </div>
            <div className="d-flex flex-row-reverse col-4">
                <div className='d-flex align-items-end'>
                    <MainButton buttonText="Finalizar" 
                    />
                </div>
            </div>
        </div>
    );
};

export default PurchaseSummary;

