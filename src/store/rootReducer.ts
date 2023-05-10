import { combineReducers } from '@reduxjs/toolkit';

// reducers imports
import authReducer from './reducers/authReducer';
import cartReducer from './reducers/cartReducer';  
import counterReducer from './reducers/counterReducer';
import productReducer from './reducers/productReducer';
import orderReducer from './reducers/orderReducer';
import returnMessageReducer from './reducers/returnMessageReducer';
import stockReducer from './reducers/stockReducer';
import categoryReducer from './reducers/categoryReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    product: productReducer,
    authenticated: authReducer,
    order: orderReducer,
    cart: cartReducer,
    returnMessage: returnMessageReducer,
    stock: stockReducer,
    category: categoryReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;




