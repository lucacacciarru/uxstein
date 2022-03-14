import { PayloadAction, Action } from '@reduxjs/toolkit';
import { ApiError } from './general';

export enum LOGOUT_ACTION_TYPES {
  TRIGGER = 'auth/logout/trigger',
  REQUEST = 'auth/logout/request',
  SUCCESS = 'auth/logout/success',
  FAILURE = 'auth/logout/failure',
}

export type LogoutResponse = {};

export type LogoutFailurePayload = ApiError;

export type LogoutAction = Action<LOGOUT_ACTION_TYPES.TRIGGER>;

export type LogoutRequestAction = Action<LOGOUT_ACTION_TYPES.REQUEST>;

export type LogoutSuccessAction = Action<LOGOUT_ACTION_TYPES.SUCCESS>;

export type LogoutFailureAction = PayloadAction<
  LogoutFailurePayload,
  LOGOUT_ACTION_TYPES.FAILURE
>;
