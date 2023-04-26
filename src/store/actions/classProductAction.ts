import { createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { ClassProduct } from '../types';

export const getClassProduct = () => async (dispatch: Dispatch) => {
    dispatch(GET_CLASS_PRODUCT_START());
    try {
        const response = await fetch('http://localhost:5000/api/classProduct/');
        const data = await response.json();
        dispatch(GET_CLASS_PRODUCT_SUCCESS(data));
    } catch (error: any) {
        dispatch(GET_CLASS_PRODUCT_FAILURE(error.message));
    }
};

export const GET_CLASS_PRODUCT_START = createAction('GET_CLASS_PRODUCT_START');
export const GET_CLASS_PRODUCT_SUCCESS = createAction<ClassProduct[]>('GET_CLASS_PRODUCT_SUCCESS');
export const GET_CLASS_PRODUCT_FAILURE = createAction<string>('GET_CLASS_PRODUCT_FAILURE');