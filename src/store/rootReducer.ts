import { combineReducers, createReducer, PayloadAction } from '@reduxjs/toolkit';
import { CounterState, ProductState, AuthenticatedState, Product } from './types';

// counter products cart
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

// products list from database
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

// 
const initialAuthenticateState: AuthenticatedState = {
    authenticated: false,
};

const authenticateReducer = createReducer(initialAuthenticateState, {
    authenticated: (state) => {
        console.log(state.authenticated)
        state.authenticated = true;
        console.log(state.authenticated)
    },
    deauthenticated: (state) => {
        console.log(state.authenticated)
        state.authenticated = false
        console.log(state.authenticated)
    },
});



const rootReducer = combineReducers({
    counter: counterReducer,
    product: productReducer,
    authenticated: authenticateReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;



