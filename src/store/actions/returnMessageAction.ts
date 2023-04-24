import { createAction } from '@reduxjs/toolkit';

export const SET_MESSAGE = createAction<{ text: string; variant: string}>('SET_MESSAGE');
export const CLEAR_MESSAGE = createAction('CLEAR_MESSAGE');