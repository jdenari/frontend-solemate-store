import { combineReducers, createReducer, PayloadAction } from '@reduxjs/toolkit';
import { CounterState, ProductState, Product } from './types';

const initialCounterState: CounterState = {
  count: 1,
};

const counterReducer = createReducer(initialCounterState, {
    increment: (state) => {
        state.count += 1;
    },
    decrement: (state) => {
        if (state.count > 1) {
        state.count -= 1;
        }
    },
    setCount: (state, action: PayloadAction<number>) => {
        state.count = action.payload;
    },
});

const initialProductState: ProductState = {
    products: [],
    loading: false,
    error: null,
};

const productReducer = createReducer(initialProductState, {
    getProductStart: (state) => {
        state.loading = true;
        state.error = null;
    },
    getProductSuccess: (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
    },
    getProductFailure: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
    },
});

const rootReducer = combineReducers({
    counter: counterReducer,
    product: productReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;



