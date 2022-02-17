import { PayloadAction } from '@reduxjs/toolkit';
import { ApiError, User } from './general';
export enum LOGIN_ACTION_TYPES {
  TRIGGER = 'auth/login/trigger',
  REQUEST = 'auth/login/request',
  SUCCESS = 'auth/login/success',
  FAILURE = 'auth/login/failure',
}

export type LoginResponse = {
  data: User;
};

export type LoginPayload = {
  username: string;
  password: string;
};
export type LoginSuccessPayload = User;
export type LoginFailurePayload = ApiError;

export type LoginAction = PayloadAction<
  LoginPayload,
  LOGIN_ACTION_TYPES.TRIGGER
>;
export type LoginRequestAction = PayloadAction<
  LoginPayload,
  LOGIN_ACTION_TYPES.REQUEST
>;
export type LoginSuccessAction = PayloadAction<
  LoginSuccessPayload,
  LOGIN_ACTION_TYPES.SUCCESS
>;
export type LoginFailureAction = PayloadAction<
  LoginFailurePayload,
  LOGIN_ACTION_TYPES.FAILURE
>;
