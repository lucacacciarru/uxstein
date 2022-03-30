import { createAction } from '@reduxjs/toolkit';
import {
  FetchTemplatesFailurePayload,
  FetchTemplatesPayload,
  FetchTemplatesSuccessPayload,
  FETCH_TEMPLATES_ACTION_TYPES,
} from '../types/fetchTemplates';

export const fetchTemplatesTrigger = createAction<
  FetchTemplatesPayload,
  FETCH_TEMPLATES_ACTION_TYPES.TRIGGER
>(FETCH_TEMPLATES_ACTION_TYPES.TRIGGER);

export const fetchTemplatesRequest = createAction<
  FetchTemplatesPayload,
  FETCH_TEMPLATES_ACTION_TYPES.REQUEST
>(FETCH_TEMPLATES_ACTION_TYPES.REQUEST);

export const fetchTemplatesSuccess = createAction<
  FetchTemplatesSuccessPayload,
  FETCH_TEMPLATES_ACTION_TYPES.SUCCESS
>(FETCH_TEMPLATES_ACTION_TYPES.SUCCESS);

export const fetchTemplatesFailure = createAction<
  FetchTemplatesFailurePayload,
  FETCH_TEMPLATES_ACTION_TYPES.FAILURE
>(FETCH_TEMPLATES_ACTION_TYPES.FAILURE);
