import { PayloadAction } from '@reduxjs/toolkit';
import { Template } from './general';

export enum FETCH_TEMPLATES_ACTION_TYPES {
  TRIGGER = 'template/fetchTemplates/trigger',
  REQUEST = 'template/fetchTemplates/request',
  SUCCESS = 'template/fetchTemplates/success',
  FAILURE = 'template/fetchTemplates/failure',
}

export type FetchTemplatesPayload = { username: string };
export type FetchTemplatesResponse = { data: Template[] };
export type FetchTemplatesSuccessPayload = Template[];
export type FetchTemplatesFailurePayload = [];

export type FetchTemplatesRequestAction = PayloadAction<FetchTemplatesPayload,
  FETCH_TEMPLATES_ACTION_TYPES.REQUEST>;

export type FetchTemplatesSuccessAction = PayloadAction<FetchTemplatesSuccessPayload,
  FETCH_TEMPLATES_ACTION_TYPES.SUCCESS>;

export type FetchTemplatesFailureAction = PayloadAction<FetchTemplatesFailurePayload,
  FETCH_TEMPLATES_ACTION_TYPES.FAILURE>;
