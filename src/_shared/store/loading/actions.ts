import { createAction } from '@reduxjs/toolkit';
import { LOADING_ACTION_TYPES, SetLoadingPayload } from './types';

export const setLoading = createAction<
  SetLoadingPayload,
  LOADING_ACTION_TYPES.SET
>(LOADING_ACTION_TYPES.SET);

export const resetLoading = createAction<
  SetLoadingPayload,
  LOADING_ACTION_TYPES.RESET
>(LOADING_ACTION_TYPES.RESET);

export const unsetLoading = createAction<
  SetLoadingPayload,
  LOADING_ACTION_TYPES.UNSET
>(LOADING_ACTION_TYPES.UNSET);
