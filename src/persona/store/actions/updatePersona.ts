import { createAction } from '@reduxjs/toolkit';
import {
  UpdatePersonaFailurePayload,
  UpdatePersonaPayload,
  UpdatePersonaSuccessPayload,
  UPDATE_ACTION_TYPES,
} from '../types/updatePersona';

export const updatePersonaTrigger = createAction<
  UpdatePersonaPayload,
  UPDATE_ACTION_TYPES.TRIGGER
>(UPDATE_ACTION_TYPES.TRIGGER);

export const updatePersonaRequest = createAction<
  UpdatePersonaPayload,
  UPDATE_ACTION_TYPES.REQUEST
>(UPDATE_ACTION_TYPES.REQUEST);

export const updatePersonaSuccess = createAction<
  UpdatePersonaSuccessPayload,
  UPDATE_ACTION_TYPES.SUCCESS
>(UPDATE_ACTION_TYPES.SUCCESS);

export const updatePersonaFailure = createAction<
  UpdatePersonaFailurePayload,
  UPDATE_ACTION_TYPES.FAILURE
>(UPDATE_ACTION_TYPES.FAILURE);
