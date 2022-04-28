import { PayloadAction } from '@reduxjs/toolkit';
import { Template } from './general';

export enum UPDATE_TEMPLATE_ACTION_TYPES {
  TRIGGER = 'template/updateTemplate/trigger',
  REQUEST = 'template/updateTemplate/request',
  SUCCESS = 'template/updateTemplate/success',
  FAILURE = 'template/updateTemplate/failure',
}

export type UpdateTemplateResponse = Template;
export type UpdateTemplatePayload = { id: string; properties: Omit<Partial<Template>, 'id'> };
export type UpdateTemplateSuccessPayload = Template;
export type UpdateTemplateFailurePayload = { id: string };

export type UpdateTemplateAction = PayloadAction<UpdateTemplatePayload,
  UPDATE_TEMPLATE_ACTION_TYPES.TRIGGER>;

export type UpdateTemplateRequestAction = PayloadAction<UpdateTemplatePayload,
  UPDATE_TEMPLATE_ACTION_TYPES.REQUEST>;

export type UpdateTemplateSuccessAction = PayloadAction<UpdateTemplateSuccessPayload,
  UPDATE_TEMPLATE_ACTION_TYPES.SUCCESS>;

export type UpdateTemplateFailureAction = PayloadAction<UpdateTemplateFailurePayload,
  UPDATE_TEMPLATE_ACTION_TYPES.FAILURE>;
