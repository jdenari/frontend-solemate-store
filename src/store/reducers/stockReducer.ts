import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { StockState, Stock } from '../types';

// products list from database
const stockState: StockState = {
    stocks: [],
    loading: false,
    error: null,
};

const stockReducer = createReducer(stockState, {
    GET_STOCK_START: (state) => {
        state.loading = true;
        state.error = null;
    },
    GET_STOCK_SUCCESS: (state, action: PayloadAction<Stock[]>) => {
        state.loading = false;
        state.stocks = action.payload;
    },
    GET_STOCK_FAILURE: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
    },
});

export default stockReducer