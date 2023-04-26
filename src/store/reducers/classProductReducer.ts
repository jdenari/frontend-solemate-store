import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ClassProductState, ClassProduct } from '../types';

// products list from database
const initialClassProductState: ClassProductState = {
    classProducts: [],
    loading: false,
    error: null,
};

const classProductReducer = createReducer(initialClassProductState, {
    GET_CLASS_PRODUCT_START: (state) => {
        state.loading = true;
        state.error = null;
    },
    GET_CLASS_PRODUCT_SUCCESS: (state, action: PayloadAction<ClassProduct[]>) => {
        state.loading = false;
        state.classProducts = action.payload;
    },
    GET_CLASS_PRODUCT_FAILURE: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
    },
});

export default classProductReducer