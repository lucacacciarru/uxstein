import { createReducer } from '@reduxjs/toolkit';
import { loginFailure, loginRequest, loginSuccess } from '../actions/login';
import { LoginState } from '../types/general';

const INITIAL_STATE: LoginState = {
    status: 'idle',
}

export const loginRootReducer = createReducer(INITIAL_STATE, (builder) => {
    builder
        .addCase(loginRequest, (state) => ({ ...state, status: 'logging' }))
        .addCase(loginSuccess, (state, action) => ({
            ...state,
            status: 'logged',
            profile: action.payload,
        }))
        .addCase(loginFailure, (state) => ({ ...state, status: 'idle', profile: undefined }))

})