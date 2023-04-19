// authReducer.ts
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from '../types';

const initialAuthState: AuthState = {
    authenticated: false,
    user: null,
};

const authReducer = createReducer(initialAuthState, {
    AUTHENTICATE: (state, action: PayloadAction<User>) => {
        state.authenticated = true;
        state.user = action.payload;
    },
    DEAUTHENTICATE: (state) => {
        state.authenticated = false;
        state.user = null;
    },
});

export default authReducer;
