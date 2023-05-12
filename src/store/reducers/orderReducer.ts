import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { OrderState, Order } from '../types';
import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';
import _ from 'lodash';

// products list from database
const initialOrderState: OrderState = {
    orders: [],
    loading: false,
    error: null,
};

const orderReducer = createReducer(initialOrderState, {
    GET_ORDER_START: (state) => {
        state.loading = true;
        state.error = null;
    },
    GET_ORDER_SUCCESS: (state, action: PayloadAction<Order[]>) => {
        state.loading = false;
        state.orders = action.payload;
    },
    GET_ORDER_FAILURE: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
    },
});

export const selectOrders = (state: RootState) => state.order.orders;

export const selectDistinctDates = createSelector(
    [selectOrders, (state: RootState) => state.authenticated.user],
    (orders, authenticated) => {
        if (authenticated) {
            const filteredOrders = orders.filter(order => order.userId === authenticated.id);
            const groupedOrders = _.groupBy(filteredOrders, (order) => order.dateOrder.split('T')[0]);
            return Object.keys(groupedOrders);
        }
        return [];
    }
);

export default orderReducer