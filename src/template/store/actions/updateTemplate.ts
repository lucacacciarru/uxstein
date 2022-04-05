import { createAction } from '@reduxjs/toolkit';
import {
  UpdateTemplateFailurePayload,
  UpdateTemplatePayload,
  UpdateTemplateSuccessPayload,
  UPDATE_TEMPLATE_ACTION_TYPES,
} from '../types/updateTemplate';

export const updateTemplateTrigger = createAction<
  UpdateTemplatePayload,
  UPDATE_TEMPLATE_ACTION_TYPES.TRIGGER
>(UPDATE_TEMPLATE_ACTION_TYPES.TRIGGER);

export const updateTemplateRequest = createAction<
  UpdateTemplatePayload,
  UPDATE_TEMPLATE_ACTION_TYPES.REQUEST
>(UPDATE_TEMPLATE_ACTION_TYPES.REQUEST);

export const updateTemplateSuccess = createAction<
  UpdateTemplateSuccessPayload,
  UPDATE_TEMPLATE_ACTION_TYPES.SUCCESS
>(UPDATE_TEMPLATE_ACTION_TYPES.SUCCESS);

export const updateTemplateFailure = createAction<
  UpdateTemplateFailurePayload,
  UPDATE_TEMPLATE_ACTION_TYPES.FAILURE
>(UPDATE_TEMPLATE_ACTION_TYPES.FAILURE);
