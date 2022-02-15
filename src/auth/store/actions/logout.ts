import { createAction } from '@reduxjs/toolkit';
import {
  LogoutFailurePayload,
  LogoutPayload,
  LogoutSuccessPayload,
  LOGOUT_ACTION_TYPES,
} from '../types/logout';

export const logoutTrigger = createAction<
  LogoutPayload,
  LOGOUT_ACTION_TYPES.TRIGGER
>(LOGOUT_ACTION_TYPES.TRIGGER);
export const logoutRequest = createAction<
  LogoutPayload,
  LOGOUT_ACTION_TYPES.REQUEST
>(LOGOUT_ACTION_TYPES.REQUEST);
export const logoutSuccess = createAction<
  LogoutSuccessPayload,
  LOGOUT_ACTION_TYPES.SUCCESS
>(LOGOUT_ACTION_TYPES.SUCCESS);
export const logoutFailure = createAction<
  LogoutFailurePayload,
  LOGOUT_ACTION_TYPES.FAILURE
>(LOGOUT_ACTION_TYPES.FAILURE);
