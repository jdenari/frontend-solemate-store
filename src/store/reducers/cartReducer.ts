import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { CartState, Product } from '../types';

// products list from database
const cartState: CartState = {
    carts: [],
    loading: false,
    error: null,
    id: 0,
};


const cartReducer = createReducer(cartState, {
    ADD_PRODUCT_TO_CART: (state, action: PayloadAction<{ product: Product, count: number }>) => {
        const { product, count } = action.payload;
        console.log(state.id)
        const newCart = {
            id: state.id + 1,
            product: product,
            count: count,
        };
        return {
            ...state,
            carts: [...state.carts, newCart],
            id: state.id + 1,
        };
    },
    CLEAN_CART: (state) => {
        return {
            ...state,
            carts: [],
            id: 0,
        };
    },
    REMOVE_PRODUCT_FROM_CART: (state, action: PayloadAction<number>) => {
        const cartIdToRemove = action.payload;
        const newCarts = state.carts.filter(cart => cart.id !== cartIdToRemove);
        return {
            ...state,
            carts: newCarts,
        };
    },
    INCREMENT_PRODUCT_IN_CART: (state, action: PayloadAction<number>) => {
        const cartIdToIncrement = action.payload;
        console.log(cartIdToIncrement)
        const cart = state.carts.find((cart) => cart.id === cartIdToIncrement);
        if (cart) {
            cart.count += 1;
        }
    },
    DECREMENT_PRODUCT_IN_CART: (state, action: PayloadAction<number>) => {
        const cartIdToDecrement = action.payload;
        const cart = state.carts.find((cart) => cart.id === cartIdToDecrement);
        if (cart && cart.count > 1) {
            cart.count -= 1;
        }
    },
});

export default cartReducer;