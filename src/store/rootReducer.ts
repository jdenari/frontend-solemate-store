import { combineReducers, createReducer, PayloadAction } from '@reduxjs/toolkit';
import { CounterState } from './types';

const initialCounterState: CounterState = {
    count: 1,
};

const counterReducer = createReducer(initialCounterState, {
    increment: (state) => {
        console.log('salut')
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

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;

