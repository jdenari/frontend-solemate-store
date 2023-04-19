// orderActions.ts
import { createAction } from '@reduxjs/toolkit';

export const AUTHENTICATE = createAction<{ id: number; firstName: string; lastName: string; email: string; access: string }>('AUTHENTICATE');
export const DEAUTHENTICATE = createAction('DEAUTHENTICATE');