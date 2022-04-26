import { PayloadAction } from '@reduxjs/toolkit';
import { Template } from './general';

export enum CREATE_TEMPLATE_ACTION_TYPES {
  TRIGGER = 'template/create/trigger',
  REQUEST = 'template/create/request',
  SUCCESS = 'template/create/success',
  FAILURE = 'template/create/failure',
}

export type CreateTemplateResponse = Template;
export type CreateTemplatePayload = Template;
export type CreateTemplateSuccessPayload = Template;
export type CreateTemplateFailurePayload = { id: string };

export type CreateTemplateAction = PayloadAction<CreateTemplatePayload,
  CREATE_TEMPLATE_ACTION_TYPES.TRIGGER>;

export type CreateTemplateRequestAction = PayloadAction<CreateTemplatePayload,
  CREATE_TEMPLATE_ACTION_TYPES.REQUEST>;

export type CreateTemplateSuccessAction = PayloadAction<CreateTemplateSuccessPayload,
  CREATE_TEMPLATE_ACTION_TYPES.SUCCESS>;

export type CreateTemplateFailureAction = PayloadAction<CreateTemplateFailurePayload,
  CREATE_TEMPLATE_ACTION_TYPES.FAILURE>;
