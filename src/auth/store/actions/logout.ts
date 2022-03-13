import { createAction } from '@reduxjs/toolkit';
import { LogoutFailurePayload, LOGOUT_ACTION_TYPES } from '../types/logout';

export const logoutTrigger = createAction(LOGOUT_ACTION_TYPES.TRIGGER);
export const logoutRequest = createAction(LOGOUT_ACTION_TYPES.REQUEST);
export const logoutSuccess = createAction(LOGOUT_ACTION_TYPES.SUCCESS);
export const logoutFailure = createAction<
  LogoutFailurePayload,
  LOGOUT_ACTION_TYPES.FAILURE
>(LOGOUT_ACTION_TYPES.FAILURE);
