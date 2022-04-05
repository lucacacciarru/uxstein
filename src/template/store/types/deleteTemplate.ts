import { PayloadAction } from '@reduxjs/toolkit';
import { ApiError } from './general';

export enum DELETE_TEMPLATE_ACTION_TYPES {
  TRIGGER = 'template/deleteTemplate/trigger',
  REQUEST = 'template/deleteTemplate/request',
  SUCCESS = 'template/deleteTemplate/success',
  FAILURE = 'template/deleteTemplate/failure',
}

export type DeleteTemplateResponse = {
  id: string;
};

export type DeleteTemplatePayload = {
  id: string;
};

export type DeleteTemplateSuccessPayload = string;
export type DeleteTemplateFailurePayload = ApiError;

export type DeleteTemplateAction = PayloadAction<
  DeleteTemplatePayload,
  DELETE_TEMPLATE_ACTION_TYPES.TRIGGER
>;

export type DeleteTemplateRequestAction = PayloadAction<
  DeleteTemplatePayload,
  DELETE_TEMPLATE_ACTION_TYPES.REQUEST
>;

export type DeleteTemplateSuccessAction = PayloadAction<
  DeleteTemplateSuccessPayload,
  DELETE_TEMPLATE_ACTION_TYPES.SUCCESS
>;

export type DeleteTemplateFailureAction = PayloadAction<
  DeleteTemplateFailurePayload,
  DELETE_TEMPLATE_ACTION_TYPES.FAILURE
>;
