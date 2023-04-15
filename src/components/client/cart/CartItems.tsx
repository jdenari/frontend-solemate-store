import React from 'react'
import styles from './CartItems.module.css';
import { RootState } from '../../../store/types';
import { useSelector } from 'react-redux';
import HorizontalCard from '../HorizontalCard';

const CartItems = () => {
    const carts = useSelector((state: RootState) => state.cart.carts);

    if (carts.length === 0) {
        return (
        <div className={`${styles.bgLightWhite} container p-5 rounded my-3 text-center`}>
            <h4>Você não possui nenhum produto no carrinho! </h4>
        </div>
        )
    }

    const horizontalCards = carts.map((cart) => ({
        imgSrc: `http://localhost:5000/api/photos/${cart.product.id}/photo`,
        imgAlt: cart.product.productName,
        title: cart.product.productName,
        description: cart.product.description,
        price: `R$ ${cart.product.price}`
    }));

    return (
        <div className={`${styles.bgLightWhite} container p-3 rounded my-3`}>
        <div className="row my-1 d-flex">
            {horizontalCards.map((card, index) => (
            <HorizontalCard key={index} {...card} />
            ))}
        </div>
        </div>
    )
}

export default CartItems;

