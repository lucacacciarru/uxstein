import { createReducer } from '@reduxjs/toolkit';
import { loginRequest, loginSuccess, loginFailure } from '../actions/login';
import { logoutRequest, logoutSuccess, logoutFailure } from '../actions/logout';
import { updateRequest, updateSuccess, updateFailure } from '../actions/update';
import * as loginCases from './loginCases';
import * as logoutCases from './logoutCases';
import * as updateCases from './updateCases';
import { AuthState } from '../types';

const INITIAL_STATE: AuthState = {
  status: 'idle',
};

export const authRootReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(loginRequest, loginCases.requestCase)
    .addCase(loginSuccess, loginCases.successCase)
    .addCase(loginFailure, loginCases.failureCase)
    .addCase(logoutRequest, logoutCases.requestCase)
    .addCase(logoutSuccess, logoutCases.successCase)
    .addCase(logoutFailure, logoutCases.failureCase)
    .addCase(updateRequest, updateCases.requestCase)
    .addCase(updateSuccess, updateCases.successCase)
    .addCase(updateFailure, updateCases.failureCase)
    .addDefaultCase(state => state);
});
