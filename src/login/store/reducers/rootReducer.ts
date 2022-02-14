import { createReducer } from '@reduxjs/toolkit';
import { loginFailure, loginRequest, loginSuccess } from '../actions/login';
import { LoginState } from '../types/general';
import { failureCase, requestCase, successCase } from '.';

const INITIAL_STATE: LoginState = {
  status: 'idle',
};

export const loginRootReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(loginRequest, requestCase)
    .addCase(loginSuccess, successCase)
    .addCase(loginFailure, failureCase)
    .addDefaultCase(state => state);
});
