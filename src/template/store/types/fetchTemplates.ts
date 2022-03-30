import { PayloadAction } from '@reduxjs/toolkit';
import { ApiError, Template } from './general';

export enum FETCH_TEMPLATES_ACTION_TYPES {
  TRIGGER = 'template/fetchTemplate/trigger',
  REQUEST = 'template/fetchTemplate/request',
  SUCCESS = 'template/fetchTemplate/successs',
  FAILURE = 'template/fetchTemplate/failure',
}

export type FetchTemplatesResponse = {
  data: Template[];
};

export type FetchTemplatesPayload = {
  username: string;
};

export type FetchTemplatesSuccessPayload = Template[];
export type FetchTemplatesFailurePayload = ApiError;

export type FetchTemplatesAction = PayloadAction<
  FetchTemplatesPayload,
  FETCH_TEMPLATES_ACTION_TYPES.TRIGGER
>;

export type FetchTemplatesRequestAction = PayloadAction<
  FetchTemplatesPayload,
  FETCH_TEMPLATES_ACTION_TYPES.REQUEST
>;

export type FetchTemplatesSuccesssAction = PayloadAction<
  FetchTemplatesSuccessPayload,
  FETCH_TEMPLATES_ACTION_TYPES.SUCCESS
>;

export type FetchTemplatesFailureAction = PayloadAction<
  FetchTemplatesFailurePayload,
  FETCH_TEMPLATES_ACTION_TYPES.FAILURE
>;
