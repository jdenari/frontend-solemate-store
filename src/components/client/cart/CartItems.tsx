// patterns imports
import React from 'react'
import styles from './CartItems.module.css';
import { RootState } from '../../../store/types';
import { useSelector, useDispatch } from 'react-redux';

// child components imports
import HorizontalCard from '../HorizontalCard';
import MainButton from '@/components/MainButton';

// actions imports
import { removeProductFromCart } from '../../../store/actions';
import { incrementProductInCart, decrementProductInCart } from '../../../store/actions';

const CartItems = () => {

    // data constants
    const carts = useSelector((state: RootState) => state.cart.carts);
    const dispatch = useDispatch();

    const currentDate = new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    const horizontalCards = carts.map((cart) => ({
        imgSrc: `http://localhost:5000/api/photos/${cart.product.id}/photo`,
        imgAlt: cart.product.productName,
        title: cart.product.productName,
        description: cart.product.description,
        price: `R$ ${cart.product.price}`,
        onDelete: () => handleDelete(cart.id),
        count: cart.count,
        onIncrement: () => handleIncrement(cart.id),
        onDecrement: () => handleDecrement(cart.id),
        showButton: true
    }));

    // functions handle
    const handleDelete = (cartId: number) => {dispatch(removeProductFromCart(cartId));};
    const handleIncrement = (cartId: number) => {dispatch(incrementProductInCart(cartId));};
    const handleDecrement = (cartId: number) => {dispatch(decrementProductInCart(cartId));};
      
    // return the html if the cart is empty
    if (carts.length === 0) {
        return (
        <div className={`${styles.bgLightWhite} container p-5 rounded my-3 text-center`}>
            <h4>Você não possui nenhum produto no carrinho! </h4>
            <div className='col-3 m-auto p-3 mt-5'>
                <MainButton buttonText="Verifique nossas ofertas" href="/"/>
            </div>
        </div>
        )
    }

    // return the html if the cart is not empty
    return (
        <div className={`${styles.bgLightWhite} container ${styles.containerOrder} p-3 rounded my-3 d-flex`}>
            <div className="row my-1 d-flex col-11 m-auto">
                <h2 className="mb-3 m-0">Meu Carrinho</h2>
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

