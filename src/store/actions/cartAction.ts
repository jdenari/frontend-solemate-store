// orderActions.ts
import { createAction } from '@reduxjs/toolkit';
import { Product } from '../types';

export const ADD_PRODUCT_TO_CART = createAction<{ product: Product, count: number }>('ADD_PRODUCT_TO_CART');
export const REMOVE_PRODUCT_FROM_CART = createAction<number>('REMOVE_PRODUCT_FROM_CART');
export const CLEAN_CART = createAction('CLEAN_CART');
export const INCREMENT_PRODUCT_IN_CART = createAction<number>('INCREMENT_PRODUCT_IN_CART');
export const DECREMENT_PRODUCT_IN_CART = createAction<number>('DECREMENT_PRODUCT_IN_CART');