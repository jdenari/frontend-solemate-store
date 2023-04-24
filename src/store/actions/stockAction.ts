import { createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { Stock } from '../types';

export const getStock = () => async (dispatch: Dispatch) => {
    dispatch(GET_STOCK_START());
    try {
        const response = await fetch('http://localhost:5000/api/stock/');
        const data = await response.json();
        dispatch(GET_STOCK_SUCCESS(data));
    } catch (error: any) {
        dispatch(GET_STOCK_FAILURE(error.message));
    }
};

export const GET_STOCK_START = createAction('GET_STOCK_START');
export const GET_STOCK_SUCCESS = createAction<Stock[]>('GET_STOCK_SUCCESS');
export const GET_STOCK_FAILURE = createAction<string>('GET_STOCK_FAILURE');