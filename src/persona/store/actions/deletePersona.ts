import { createAction } from '@reduxjs/toolkit';
import {
  DeletePersonaFailurePayload,
  DeletePersonaPayload,
  DeletePersonaSuccessPayload,
  DELETE_PERSONA_ACTION_TYPES,
} from '../types/deletePersona';

export const deletePersonaTrigger = createAction<
  DeletePersonaPayload,
  DELETE_PERSONA_ACTION_TYPES.TRIGGER
>(DELETE_PERSONA_ACTION_TYPES.TRIGGER);

export const deletePersonaRequest = createAction<
  DeletePersonaPayload,
  DELETE_PERSONA_ACTION_TYPES.REQUEST
>(DELETE_PERSONA_ACTION_TYPES.REQUEST);

export const deletePersonaSuccess = createAction<
  DeletePersonaSuccessPayload,
  DELETE_PERSONA_ACTION_TYPES.SUCCESS
>(DELETE_PERSONA_ACTION_TYPES.SUCCESS);

export const deletePersonaFailure = createAction<
  DeletePersonaFailurePayload,
  DELETE_PERSONA_ACTION_TYPES.FAILURE
>(DELETE_PERSONA_ACTION_TYPES.FAILURE);
