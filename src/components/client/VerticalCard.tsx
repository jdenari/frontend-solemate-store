// patterns imports
import React from 'react';
import styles from './VerticalCard.module.css';
import { useDispatch } from 'react-redux';

// actions functions
import { SET_PRODUCT_SHOW } from '../../store/actions';

// props
interface CardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    price: string;
    productId: number;
}

const Card: React.FC<CardProps> = ({ imgSrc, imgAlt, title, price, productId }) => {
    // data constants
    const dispatch = useDispatch();
  
    // handle functions
        // this changes the main content showed in landing page
    const handleClick = () => {dispatch(SET_PRODUCT_SHOW(productId));};
  
    return (
        <div className="col-sm-6 px-2 py-1">
            <div className={`${styles.cardContainer} card`} onClick={handleClick}>
                <img src={imgSrc} alt={imgAlt} className="card-img-top" />
                <div className={`${styles.cardBody} card-body p-3`}>
                    <h6 className="card-title my-1">{title}</h6>
                    <p className="card-text my-1">{price}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
