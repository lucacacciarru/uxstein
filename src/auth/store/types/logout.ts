import { PayloadAction } from '@reduxjs/toolkit';
import { ApiError, User } from './general';

export enum LOGOUT_ACTION_TYPES {
  TRIGGER = 'auth/logout/trigger',
  REQUEST = 'auth/logout/request',
  SUCCESS = 'auth/logout/success',
  FAILURE = 'auth/logout/failure',
}

export type LogoutResponse = {
  data: User;
};

export type LogoutPayload = {};

export type LogoutSuccessPayload = {};
export type LogoutFailurePayload = ApiError;

export type LogoutAction = PayloadAction<
  LogoutPayload,
  LOGOUT_ACTION_TYPES.TRIGGER
>;
export type LogoutRequestAction = PayloadAction<
  LogoutPayload,
  LOGOUT_ACTION_TYPES.REQUEST
>;
export type LogoutSuccessAction = PayloadAction<
  LogoutSuccessPayload,
  LOGOUT_ACTION_TYPES.SUCCESS
>;
export type LogoutFailureAction = PayloadAction<
  LogoutFailurePayload,
  LOGOUT_ACTION_TYPES.FAILURE
>;
