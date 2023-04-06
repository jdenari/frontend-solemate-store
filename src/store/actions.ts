import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { Product } from './types';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const setCount = createAction<number>('setCount');

export const getProductStart = createAction('getProductStart');
export const getProductSuccess = createAction<Product[]>('getProductSuccess');
export const getProductFailure = createAction<string>('getProductFailure');

export const getProduct = () => async (dispatch: Dispatch) => {
    dispatch(getProductStart());
    try {
        const response = await fetch('http://localhost:5000/api/product/');
        const data = await response.json();
        console.log(data)
        dispatch(getProductSuccess(data));
    } catch (error: any) {
        dispatch(getProductFailure(error.message));
    }
};




