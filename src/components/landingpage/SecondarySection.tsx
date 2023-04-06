import React from 'react';
import CardVertical from '../client/VerticalCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import './SecondarySection.module.css';

const SecondarySection: React.FC = () => {
    const products = useSelector((state: RootState) => state.product.products);

    const renderProducts = () => {
        return products.map((product, index) => (
            <CardVertical
                key={index}
                imgSrc={`shoes/shoes-0${index + 1}.png`}
                imgAlt={`Image ${index + 1}`}
                title={product.productName}
                price={`R$ ${product.price}`}
            />
        ));
    };

    return (
        <div className="container vh-100 overflow-auto">
            <div className="row my-1">
                {renderProducts()}
            </div>
        </div>
    );
};

export default SecondarySection;
