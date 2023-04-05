import React from 'react';
import Counter from '../Counter';

interface CardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    price: string;
    description: string;
}

const HorizontalCard: React.FC<CardProps> = ({imgSrc,imgAlt,title,description,price,}) => {
    return (
        <div className="col-sm-9 px-2 py-2 m-auto">
            <div className="card d-flex">
                <div className="row g-0">
                    <div className="col-md-3">
                        <img
                            src={imgSrc}
                            alt={imgAlt}
                            className="card-img-top border border-5 border-light m-1"
                        />
                    </div>
                    <div className="col-md-9 d-flex flex-column">
                        <div className="card-body p-3 flex-grow-1 d-flex flex-column">
                            <h5 className="card-title mb-2">{title}</h5>
                            <p className="card-text my-1">{description}</p>
                            <div className='d-flex w-100 mt-auto justify-content-between align-items-center'>
                                <p className="card-text my-1 fs-5">{price}</p>
                                <div className='d-flex align-items-center'>
                                    <Counter 
                                        showExtraButton={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalCard;
