import { combineReducers, createReducer, PayloadAction } from '@reduxjs/toolkit';
import { CounterState, ProductState, AuthenticatedState, CartState, Product, Order, OrderState, Cart } from './types';
import _ from 'lodash';
import { createSelector } from 'reselect';

// counter products cart
const initialCounterState: CounterState = {
    count: 1,
    productShow: 1,
};

const counterReducer = createReducer(initialCounterState, {
    increment: (state) => {state.count += 1;},
    decrement: (state) => {if (state.count > 1) {state.count -= 1;}},
    setCount: (state, action: PayloadAction<number>) => {state.count = action.payload - 1;},

    setProductShow: (state, action: PayloadAction<number>) => {state.productShow = action.payload -1;},
    incrementProductShow: (state, action: PayloadAction<number>) => {if (state.productShow < action.payload -1){state.productShow += 1;}},
    decrementProductShow: (state, action: PayloadAction<number>) => {if (state.productShow > 0) {state.productShow -= action.payload;}},
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
        state.authenticated = true;
    },
    deauthenticated: (state) => {
        state.authenticated = false
    },
});

// products list from database
const initialOrderState: OrderState = {
    orders: [],
    loading: false,
    error: null,
};

const orderReducer = createReducer(initialOrderState, {
    getOrderStart: (state) => {
        state.loading = true;
        state.error = null;
    },
    getOrderSuccess: (state, action: PayloadAction<Order[]>) => {
        state.loading = false;
        state.orders = action.payload;
    },
    getOrderFailure: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
    },
});

// products list from database
const cartState: CartState = {
    carts: [],
    loading: false,
    error: null,
};

const cartReducer = createReducer(cartState, {
    addProductToCart: (state, action: PayloadAction<{ product: Product, count: number }>) => {
        const { product, count } = action.payload;
        const newCart = {
            id: state.carts.length + 1,
            product: product,
            count: count
        };
        return {
            ...state,
            carts: [...state.carts, newCart]
        };
    },
    clearCart: (state) => {
        return {
            ...state,
            carts: []
        };
    }
});

const rootReducer = combineReducers({
    counter: counterReducer,
    product: productReducer,
    authenticated: authenticateReducer,
    order: orderReducer,
    cart: cartReducer,
});

export const selectOrders = (state: RootState) => state.order.orders;

export const selectDistinctDates = createSelector(
    [selectOrders],
    (orders) => {
        const groupedOrders = _.groupBy(orders, (order) => order.date.split(' ')[0]);
        return Object.keys(groupedOrders);
    }
);

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;




