import { createAction } from '@reduxjs/toolkit'
import { LoginPaylaod, LoginSuccessPayload, LoginFailurePayload, LOGIN_ACTION_TYPES } from '../types/login';

export const loginTrigger = createAction<LoginPaylaod>(LOGIN_ACTION_TYPES.TRIGGER);
export const loginRequest = createAction<LoginPaylaod>(LOGIN_ACTION_TYPES.REQUEST);
export const loginSuccess = createAction<LoginSuccessPayload>(LOGIN_ACTION_TYPES.SUCCESS);
export const loginFailure = createAction<LoginFailurePayload>(LOGIN_ACTION_TYPES.FAILURE);