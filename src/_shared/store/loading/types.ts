import { PayloadAction } from '@reduxjs/toolkit';

export enum LoadingKeys {
  global = 'global',
  auth = 'auth',
  builder = 'builder',
  persona = 'personas',
  template = 'templates'
};

export type LoadingSliceConfig = {
  loading: number;
};

export type SetLoadingPayload = {
  key: LoadingKeys;
};

export enum LOADING_ACTION_TYPES {
  SET = 'loading/set',
  UNSET = 'loading/unset',
  RESET = 'loading/reset',
}

export type SetLoading = PayloadAction<
  SetLoadingPayload,
  LOADING_ACTION_TYPES.SET
>;

export type ResetLoading = PayloadAction<
  SetLoadingPayload,
  LOADING_ACTION_TYPES.RESET
>;

export type UnsetLoading = PayloadAction<
  SetLoadingPayload,
  LOADING_ACTION_TYPES.UNSET
>;

export type LoadingState = Record<string, LoadingSliceConfig>;
