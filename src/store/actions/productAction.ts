// productActions.ts
import { createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { Product } from '../types';

export const getProduct = () => async (dispatch: Dispatch) => {
    dispatch(GET_PRODUCT_START());
    try {
        const response = await fetch('http://localhost:5000/api/product/');
        const data = await response.json();
        dispatch(GET_PRODUCT_SUCCESS(data));
    } catch (error: any) {
        dispatch(GET_PRODUCT_FAILURE(error.message));
    }
};

export const GET_PRODUCT_START = createAction('GET_PRODUCT_START');
export const GET_PRODUCT_SUCCESS = createAction<Product[]>('GET_PRODUCT_SUCCESS');
export const GET_PRODUCT_FAILURE = createAction<string>('GET_PRODUCT_FAILURE');
