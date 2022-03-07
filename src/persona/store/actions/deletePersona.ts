import { createAction } from '@reduxjs/toolkit';
import {
  DeletePersonaFailurePayload,
  DeletePersonaPayload,
  DeletePersonaSuccessPayload,
  DELETEPERSONA_ACTION_TYPES,
} from '../types/deletePersona';

export const deletePersonaTrigger = createAction<
  DeletePersonaPayload,
  DELETEPERSONA_ACTION_TYPES.TRIGGER
>(DELETEPERSONA_ACTION_TYPES.TRIGGER);

export const deletePersonaRequest = createAction<
  DeletePersonaPayload,
  DELETEPERSONA_ACTION_TYPES.REQUEST
>(DELETEPERSONA_ACTION_TYPES.REQUEST);

export const deletePersonaSuccess = createAction<
  DeletePersonaSuccessPayload,
  DELETEPERSONA_ACTION_TYPES.SUCCESS
>(DELETEPERSONA_ACTION_TYPES.SUCCESS);

export const deletePersonaFailure = createAction<
  DeletePersonaFailurePayload,
  DELETEPERSONA_ACTION_TYPES.FAILURE
>(DELETEPERSONA_ACTION_TYPES.FAILURE);
