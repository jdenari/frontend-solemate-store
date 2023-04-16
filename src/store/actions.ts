import { createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { Product } from './types';
import { Order } from './types';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const setCount = createAction<number>('setCount');
export const setProductShow = createAction<number>('setProductShow');
export const incrementProductShow = createAction<number>('incrementProductShow');
export const decrementProductShow = createAction<number>('decrementProductShow');

export const getProductStart = createAction('getProductStart');
export const getProductSuccess = createAction<Product[]>('getProductSuccess');
export const getProductFailure = createAction<string>('getProductFailure');

export const authenticated = createAction('authenticated');
export const deauthenticated = createAction('deauthenticated');

export const getOrderStart = createAction('getOrderStart');
export const getOrderSuccess = createAction<Order[]>('getOrderSuccess');
export const getOrderFailure = createAction<string>('getOrderFailure');

export const addProductToCart = createAction<{ product: Product, count: number }>('addProductToCart');
export const removeProductFromCart = createAction<number>('removeProductFromCart');
export const clearCart = createAction('clearCart');
export const incrementProductInCart = createAction<number>('incrementProductInCart');
export const decrementProductInCart = createAction<number>('decrementProductInCart');


export const getProduct = () => async (dispatch: Dispatch) => {
    dispatch(getProductStart());
    try {
        const response = await fetch('http://localhost:5000/api/product/');
        const data = await response.json();
        dispatch(getProductSuccess(data));
    } catch (error: any) {
        dispatch(getProductFailure(error.message));
    }
};

export const getOrder = () => async (dispatch: Dispatch) => {
    dispatch(getOrderStart());
    try {
        const response = await fetch('http://localhost:5000/api/order/');
        const data = await response.json();
        dispatch(getOrderSuccess(data));
    } catch (error: any) {
        dispatch(getOrderFailure(error.message));
    }
};




