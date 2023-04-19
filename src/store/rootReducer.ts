import { combineReducers } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import _ from 'lodash';

// reducers imports
import authReducer from './reducers/authReducer';
import cartReducer from './reducers/cartReducer';  
import counterReducer from './reducers/counterReducer';
import productReducer from './reducers/productReducer';
import orderReducer from './reducers/orderReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    product: productReducer,
    authenticated: authReducer,
    order: orderReducer,
    cart: cartReducer,
});

export const selectOrders = (state: RootState) => state.order.orders;

export const selectDistinctDates = createSelector(
    [selectOrders],
    (orders) => {
        const groupedOrders = _.groupBy(orders, (order) => order.date.split('T')[0]);
        return Object.keys(groupedOrders);
    }
);

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;




