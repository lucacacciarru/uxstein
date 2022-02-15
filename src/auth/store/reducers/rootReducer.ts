import { createReducer } from '@reduxjs/toolkit';
import { loginFailure, loginRequest, loginSuccess } from '../actions/login';
import { AuthState } from '../types';
import { failureCase, successCase, requestCase } from './loginCases';

const INITIAL_STATE: AuthState = {
  status: 'idle',
};

export const loginRootReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(loginRequest, requestCase)
    .addCase(loginSuccess, successCase)
    .addCase(loginFailure, failureCase)
    .addDefaultCase(state => state)
});
