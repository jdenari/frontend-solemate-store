import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { CounterState } from '../types';

// counter products cart
const initialCounterState: CounterState = {
    count: 1,
    productShow: 0,
};

const counterReducer = createReducer(initialCounterState, {
    INCREMENT: (state) => {
        state.count += 1;
    },
    DECREMENT: (state) => {
        if (state.count > 1) {state.count -= 1;}
    },
    SET_COUNT: (state, action: PayloadAction<number>) => {
        state.count = action.payload - 1;
    },
    SET_PRODUCT_SHOW: (state, action: PayloadAction<number>) => {
        state.productShow = action.payload -1;
    },
    INCREMENT_PRODUCT_SHOW: (state, action: PayloadAction<number>) => {
        if (state.productShow < action.payload -1){
            state.productShow += 1;
        }
    },
    DECREMENT_PRODUCT_SHOW: (state, action: PayloadAction<number>) => {
        if (state.productShow > 0) {
            state.productShow -= action.payload;
        }
    },
});

export default counterReducer;