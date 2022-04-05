import { createAction } from '@reduxjs/toolkit';
import {
  DeleteTemplateFailurePayload,
  DeleteTemplatePayload,
  DeleteTemplateSuccessPayload,
  DELETE_TEMPLATE_ACTION_TYPES,
} from '../types/deleteTemplate';

export const deleteTemplateTrigger = createAction<
  DeleteTemplatePayload,
  DELETE_TEMPLATE_ACTION_TYPES.TRIGGER
>(DELETE_TEMPLATE_ACTION_TYPES.TRIGGER);

export const deleteTemplateRequest = createAction<
  DeleteTemplatePayload,
  DELETE_TEMPLATE_ACTION_TYPES.REQUEST
>(DELETE_TEMPLATE_ACTION_TYPES.REQUEST);

export const deleteTemplateSuccess = createAction<
  DeleteTemplateSuccessPayload,
  DELETE_TEMPLATE_ACTION_TYPES.SUCCESS
>(DELETE_TEMPLATE_ACTION_TYPES.SUCCESS);

export const deleteTemplateFailure = createAction<
  DeleteTemplateFailurePayload,
  DELETE_TEMPLATE_ACTION_TYPES.FAILURE
>(DELETE_TEMPLATE_ACTION_TYPES.FAILURE);
