import React from 'react';
import { useSelector } from 'react-redux';
import './SecondarySection.module.css';

import CardVertical from '../client/VerticalCard';
import { RootState } from '../../store/types';

const SecondarySection: React.FC = () => {
    const products = useSelector((state: RootState) => state.product.products);

    const renderProducts = () => {
        const activeProducts = products.filter(product => product.statusProduct === 'ACTIVE');
        
        return activeProducts.map((product, index) => (
            <CardVertical
                key={index}
                imgSrc={`http://localhost:5000/api/photos/${product.id}/photo`}
                imgAlt={`Image ${index + 1}`}
                title={product.productName}
                price={`R$ ${product.price.toFixed(2)}`}
                productId={product.id}
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

