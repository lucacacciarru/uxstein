import { createAction } from '@reduxjs/toolkit';
import {
  CreateTemplateFailurePayload,
  CreateTemplatePayload,
  CreateTemplateSuccessPayload,
  CREATE_TEMPLATE_ACTION_TYPES,
} from '../types/createTemplate';

export const createTemplateTrigger = createAction<
  CreateTemplatePayload,
  CREATE_TEMPLATE_ACTION_TYPES.TRIGGER
>(CREATE_TEMPLATE_ACTION_TYPES.TRIGGER);

export const createTemplateRequest = createAction<
  CreateTemplatePayload,
  CREATE_TEMPLATE_ACTION_TYPES.REQUEST
>(CREATE_TEMPLATE_ACTION_TYPES.REQUEST);

export const createTemplateSuccess = createAction<
  CreateTemplateSuccessPayload,
  CREATE_TEMPLATE_ACTION_TYPES.SUCCESS
>(CREATE_TEMPLATE_ACTION_TYPES.SUCCESS);

export const createTemplateFailure = createAction<
  CreateTemplateFailurePayload,
  CREATE_TEMPLATE_ACTION_TYPES.FAILURE
>(CREATE_TEMPLATE_ACTION_TYPES.FAILURE);
