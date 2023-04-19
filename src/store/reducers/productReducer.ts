import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ProductState, Product } from '../types';

// products list from database
const initialProductState: ProductState = {
    products: [],
    loading: false,
    error: null,
};

const productReducer = createReducer(initialProductState, {
    GET_PRODUCT_START: (state) => {
        state.loading = true;
        state.error = null;
    },
    GET_PRODUCT_SUCCESS: (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
    },
    GET_PRODUCT_FAILURE: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
    },
});

export default productReducer