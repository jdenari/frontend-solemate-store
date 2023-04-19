// orderActions.ts
import { createAction } from '@reduxjs/toolkit';

export const INCREMENT = createAction('INCREMENT');
export const DECREMENT = createAction('DECREMENT');
export const SET_COUNT = createAction<number>('SET_COUNT');
export const SET_PRODUCT_SHOW = createAction<number>('SET_PRODUCT_SHOW');
export const INCREMENT_PRODUCT_SHOW = createAction<number>('INCREMENT_PRODUCT_SHOW');
export const DECREMENT_PRODUCT_SHOW = createAction<number>('DECREMENT_PRODUCT_SHOW');
