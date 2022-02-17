import { createAction } from '@reduxjs/toolkit';
import {
  LoginPayload,
  LoginSuccessPayload,
  LoginFailurePayload,
  LOGIN_ACTION_TYPES,
} from '../types/login';

export const loginTrigger = createAction<
  LoginPayload,
  LOGIN_ACTION_TYPES.TRIGGER
>(LOGIN_ACTION_TYPES.TRIGGER);
export const loginRequest = createAction<
  LoginPayload,
  LOGIN_ACTION_TYPES.REQUEST
>(LOGIN_ACTION_TYPES.REQUEST);
export const loginSuccess = createAction<
  LoginSuccessPayload,
  LOGIN_ACTION_TYPES.SUCCESS
>(LOGIN_ACTION_TYPES.SUCCESS);
export const loginFailure = createAction<
  LoginFailurePayload,
  LOGIN_ACTION_TYPES.FAILURE
>(LOGIN_ACTION_TYPES.FAILURE);
