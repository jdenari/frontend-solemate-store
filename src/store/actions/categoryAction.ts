// productActions.ts
import { createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { Category } from '../types';

export const getCategory = () => async (dispatch: Dispatch) => {
    dispatch(GET_CATEGORY_START());
    try {
        const response = await fetch('http://localhost:5000/api/classProduct');
        const data = await response.json();
        dispatch(GET_CATEGORY_SUCCESS(data));
    } catch (error: any) {
        dispatch(GET_CATEGORY_FAILURE(error.message));
    }
};

export const GET_CATEGORY_START = createAction('GET_CATEGORY_START');
export const GET_CATEGORY_SUCCESS = createAction<Category[]>('GET_CATEGORY_SUCCESS');
export const GET_CATEGORY_FAILURE = createAction<string>('GET_CATEGORY_FAILURE');