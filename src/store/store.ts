import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer, { RootState } from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});

export default store;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;


