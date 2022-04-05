import { PayloadAction } from '@reduxjs/toolkit';
import { ApiError, Template } from './general';

export enum UPDATE_TEMPLATE_ACTION_TYPES {
  TRIGGER = 'template/updateTemplate/trigger',
  REQUEST = 'template/updateTemplate/request',
  SUCCESS = 'template/updateTemplate/success',
  FAILURE = 'template/updateTemplate/failure',
}

export type UpdateTemplateResponse = {};

export type UpdateTemplatePayload = {
  id: string;
  properties: Omit<Partial<Template>, 'id'>;
};

export type UpdateTemplateSuccessPayload = {};
export type UpdateTemplateFailurePayload = ApiError;

export type UpdateTemplateAction = PayloadAction<
  UpdateTemplatePayload,
  UPDATE_TEMPLATE_ACTION_TYPES.TRIGGER
>;

export type UpdateTemplateRequestAction = PayloadAction<
  UpdateTemplatePayload,
  UPDATE_TEMPLATE_ACTION_TYPES.REQUEST
>;

export type UpdateTemplateSuccessAction = PayloadAction<
  UpdateTemplateSuccessPayload,
  UPDATE_TEMPLATE_ACTION_TYPES.SUCCESS
>;

export type UpdateTemplateFailureAction = PayloadAction<
  UpdateTemplateFailurePayload,
  UPDATE_TEMPLATE_ACTION_TYPES.FAILURE
>;
