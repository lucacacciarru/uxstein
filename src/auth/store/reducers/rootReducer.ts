import { createReducer } from '@reduxjs/toolkit';
import { loginRequest, loginSuccess, loginFailure } from '../actions/login';
import { logoutRequest, logoutSuccess, logoutFailure } from '../actions/logout';
import * as logingCases from './loginCases';
import * as logoutCases from './logoutCases';
import { AuthState } from '../types';

const INITIAL_STATE: AuthState = {
  status: 'idle',
};

export const authRootReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(loginRequest, logingCases.requestCase)
    .addCase(loginSuccess, logingCases.successCase)
    .addCase(loginFailure, logingCases.failureCase)
    .addCase(logoutRequest, logoutCases.requestCase)
    .addCase(logoutSuccess, logoutCases.successCase)
    .addCase(logoutFailure, logoutCases.failureCase)
    .addDefaultCase(state => state);
});
