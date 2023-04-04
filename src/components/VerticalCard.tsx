import React from 'react';

interface CardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, imgAlt, title, price }) => {
    return (
        <div className="col-sm-6 px-2 py-2">
            <div className="card">
                <img src={imgSrc} alt={imgAlt} className="card-img-top" />
                <div className="card-body p-3">
                    <h5 className="card-title m-0">{title}</h5>
                    <p className="card-text">{price}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;