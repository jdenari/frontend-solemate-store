// orderActions.ts
import { createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { Order } from '../types';

export const getOrder = () => async (dispatch: Dispatch) => {
    dispatch(GET_ORDER_START());
    try {
        const response = await fetch('http://localhost:5000/api/order/');
        const data = await response.json();
        dispatch(GET_ORDER_SUCCESS(data));
    } catch (error: any) {
        dispatch(GET_ORDER_FAILURE(error.message));
    }
};

export const GET_ORDER_START = createAction('GET_ORDER_START');
export const GET_ORDER_SUCCESS = createAction<Order[]>('GET_ORDER_SUCCESS');
export const GET_ORDER_FAILURE = createAction<string>('GET_ORDER_FAILURE');