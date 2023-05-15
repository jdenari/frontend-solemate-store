import React from 'react';
import styles from './HorizontalCard.module.css';

interface CardProps {
    // require props
    imgSrc: string;
    imgAlt: string;
    title: string;
    price: string;
    description: string;

    // optional props
    onDelivery?: boolean;
    className?: string;
    deliveryDate?: string;
    deliveryStatus?: string;
    quantity?: string;
    showButton?: boolean;
    count?: number;

    // functions
    onIncrement?: () => void;
    onDecrement?: () => void;
    onDelete?: () => void;
}

const HorizontalCard: React.FC<CardProps> = ({imgSrc, imgAlt, title, description, price, onDelivery, deliveryDate, deliveryStatus, quantity, onIncrement, onDecrement,  onDelete, count, showButton = false}) => {
    
    // data constants
    const formattedPrice = parseFloat(price.replace('R$', '')).toFixed(2);

    return (
        <div className="col-sm-12 p-3 my-2 d-flex bg-light m-auto">
            <div className='d-lg-flex d-block w-100'>
                <div className="col-md-2">
                    <img
                        src={imgSrc}
                        alt={imgAlt}
                        className={`${styles.imageCard} card-img-top border border-1 border m-1 p-3`}
                    />
                </div>
                <div className='d-sm-flex'>
                    <div className="w-100 d-flex flex-column p-3">
                        <div className="card-body p-2 flex-grow-1 d-flex flex-column">
                            <h5 className="card-title mb-2">{title}</h5>
                            <p className="card-text my-1 lead fs-6">{description}</p>
                            <p className="card-text lead fs-6">{quantity}</p>
                            <div className="d-flex w-100 mt-auto justify-content-between align-items-center">
                                <p className="card-text my-1 fs-5">R$ {formattedPrice}</p>
                                {onDelete && (
                                    <button className="btn btn-link p-0 text-dark" onClick={onDelete}>
                                        Remove
                                    </button>
                                )}
                                {onDelivery && (
                                    <div>
                                        <p className="card-text my-1 lead fs-6 text-end fw-bold">{deliveryStatus}</p>
                                        <p className="card-text my-1 lead fs-6">{deliveryDate}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {showButton ? (
                    <div className="col-md-2 d-flex align-items-end p-3">
                        <div className={`text-end m-aut p-1`}>
                            <div className="d-inline-flex align-items-center border shadow-sm p-1 bg-body-tertiary rounded-5 bg-light">
                                <div className="mx-3">{count}</div>
                                    <button
                                        type="button"
                                        className={`${styles.buttonIncr} btn btn-outline-secondary btn-sm px-3 py-2 border-0 ms-1 fs-5`}
                                        onClick={onDecrement}
                                        >
                                        <img src="/icons/dash-lg.svg" alt="Decrement" />
                                    </button>
                                    <button
                                        type="button"
                                        className={`${styles.buttonIncr} btn btn-outline-secondary btn-sm px-3 py-2 border-0 mx-1 fs-5`}
                                        onClick={onIncrement}
                                        >
                                        <img src="/icons/plus-lg.svg" alt="Increment" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default HorizontalCard;

