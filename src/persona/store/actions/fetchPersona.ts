import { createAction } from '@reduxjs/toolkit';
import {
  FetchPersonaFailurePayload,
  FetchPersonaSuccessPayload,
  FETCH_PERSONA_ACTION_TYPES,
} from '../types/fetchPersona';

export const fetchPersonaTrigger = createAction(
  FETCH_PERSONA_ACTION_TYPES.TRIGGER,
);

export const fetchPersonaRequest = createAction(
  FETCH_PERSONA_ACTION_TYPES.REQUEST,
);

export const fetchPersonaSuccess = createAction<
  FetchPersonaSuccessPayload,
  FETCH_PERSONA_ACTION_TYPES.SUCCESS
>(FETCH_PERSONA_ACTION_TYPES.SUCCESS);

export const fetchPersonaFailure = createAction<
  FetchPersonaFailurePayload,
  FETCH_PERSONA_ACTION_TYPES.FAILURE
>(FETCH_PERSONA_ACTION_TYPES.FAILURE);
