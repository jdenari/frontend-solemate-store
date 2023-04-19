import { getProduct, GET_PRODUCT_START, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE } from './actions/productAction';
import { getOrder, GET_ORDER_START, GET_ORDER_SUCCESS, GET_ORDER_FAILURE } from './actions/orderAction';
import { INCREMENT, DECREMENT, SET_COUNT, SET_PRODUCT_SHOW, INCREMENT_PRODUCT_SHOW, DECREMENT_PRODUCT_SHOW } from './actions/counterReducer';
import { AUTHENTICATE, DEAUTHENTICATE } from './actions/authAction';
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, CLEAN_CART, INCREMENT_PRODUCT_IN_CART, DECREMENT_PRODUCT_IN_CART } from './actions/cartAction';

// product reducers
export { getProduct };
export { GET_PRODUCT_START };
export { GET_PRODUCT_SUCCESS };
export { GET_PRODUCT_FAILURE  };

// order reducers
export { getOrder };
export { GET_ORDER_START };
export { GET_ORDER_SUCCESS };
export { GET_ORDER_FAILURE  };

// counter reducers
export { DECREMENT };
export { INCREMENT };
export { SET_COUNT };
export { SET_PRODUCT_SHOW };
export { INCREMENT_PRODUCT_SHOW };
export { DECREMENT_PRODUCT_SHOW };

// auth reducers
export { AUTHENTICATE };
export { DEAUTHENTICATE };

// cart reducers
export { ADD_PRODUCT_TO_CART };
export { REMOVE_PRODUCT_FROM_CART };
export { CLEAN_CART };
export { INCREMENT_PRODUCT_IN_CART };
export { DECREMENT_PRODUCT_IN_CART };




