import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const setCount = createAction<number>('setCount');
