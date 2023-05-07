import { returnMessageState } from '../types';

const returnMessageState: returnMessageState = {
    message: null
};

const returnMessageReducer = (state: returnMessageState = returnMessageState, action: any): returnMessageState => {
    switch (action.type) {
        case 'SET_MESSAGE':
            return {
            ...state,
            message: action.payload,
        };
        case 'CLEAR_MESSAGE':
            return {
            ...state,
            message: null,
        };
        default:
            return state;
    }
};

export default returnMessageReducer;