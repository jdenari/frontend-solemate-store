import React from 'react'
import styles from './CartItems.module.css';
import { RootState } from '../../../store/types';
import { useSelector } from 'react-redux';
import HorizontalCard from '../HorizontalCard';

const CartItems = () => {
    const carts = useSelector((state: RootState) => state.cart.carts);

    const handleDelete = (productId: number) => {
        console.log('oi');
    };

    const currentDate = new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
      

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
        price: `R$ ${cart.product.price}`,
        onDelete: () => handleDelete(cart.product.id),
    }));

    return (
        <div className={`${styles.bgLightWhite} container p-3 rounded my-3 d-flex`}>
            <div className="row my-1 d-flex col-11 m-auto">
                <div className="w-100 mb-3 d-flex justify-content-between align-items-center">
                    <p className="m-0">{currentDate}</p>
                    <p className="m-0">ENTREGA: {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
                </div>
                <hr />
                {horizontalCards.map((card, index) => (
                <HorizontalCard key={index} {...card} />
                ))}
            </div>
        </div>
    );
      
}

export default CartItems;

