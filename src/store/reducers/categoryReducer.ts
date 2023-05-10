import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { CategoryState, Category } from '../types';

// products list from database
const initialCategoryState: CategoryState = {
    categories: [],
    loading: false,
    error: null,
};

const categoryReducer = createReducer(initialCategoryState, {
    GET_CATEGORY_START: (state) => {
        state.loading = true;
        state.error = null;
    },
    GET_CATEGORY_SUCCESS: (state, action: PayloadAction<Category[]>) => {
        state.loading = false;
        state.categories = action.payload;
    },
    GET_CATEGORY_FAILURE: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
    },
});

export default categoryReducer