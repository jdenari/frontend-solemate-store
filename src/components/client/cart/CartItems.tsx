// patterns imports
import React from 'react'
import styles from './CartItems.module.css';
import { RootState } from '../../../store/types';
import { useSelector, useDispatch } from 'react-redux';

// child components imports
import HorizontalCard from '../HorizontalCard';
import SolemateButton from '@/components/SolemateButton';

// actions imports
import { REMOVE_PRODUCT_FROM_CART } from '../../../store/actions';
import { INCREMENT_PRODUCT_IN_CART, DECREMENT_PRODUCT_IN_CART } from '../../../store/actions';

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
    const handleDelete = (cartId: number) => {dispatch(REMOVE_PRODUCT_FROM_CART(cartId));};
    const handleIncrement = (cartId: number) => {dispatch(INCREMENT_PRODUCT_IN_CART(cartId));};
    const handleDecrement = (cartId: number) => {dispatch(DECREMENT_PRODUCT_IN_CART(cartId));};
      
    // return the html if the cart is empty
    if (carts.length === 0) {
        return (
        <div className={`${styles.bgLightWhite} container ${styles.containerOrder} p-5 rounded my-3 text-center d-flex align-items-center`}>
            <div className='p-3 bg-white col-8 m-auto shadow-sm p-3 py-5 bg-body-tertiary rounded'>
                <h4>You don't have any products in your cart!</h4>
                <div className='col-3 m-auto p-3 mt-5'>
                    <SolemateButton 
                        buttonText="Check our offers" 
                        href="/"
                        variant='purple'
                    />
                </div>
            </div>
        </div>
        )
    }

    // return the html if the cart is not empty
    return (
        <div className={`${styles.bgLightWhite} container ${styles.containerOrder} p-3 rounded my-3`}>
            <div className="row my-1 d-flex col-11 m-auto">
                <h2 className="mb-3 m-0">Cart</h2>
                <div className="w-100 mb-3 d-flex justify-content-between align-items-center">
                    <p className="m-0">{currentDate}</p>
                    <p className="m-0">DELIVERY: {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
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

