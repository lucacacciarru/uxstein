import { createAction } from '@reduxjs/toolkit';
import {
  FetchPersonasFailurePayload,
  FetchPersonasSuccessPayload,
  FETCH_PERSONAS_ACTION_TYPES, FetchPersonasPayload,
} from '../types/fetchPersonas';

export const fetchPersonasTrigger = createAction(FETCH_PERSONAS_ACTION_TYPES.TRIGGER);

export const fetchPersonasRequest = createAction<FetchPersonasPayload,
  FETCH_PERSONAS_ACTION_TYPES.REQUEST>(FETCH_PERSONAS_ACTION_TYPES.REQUEST);

export const fetchPersonasSuccess = createAction<FetchPersonasSuccessPayload,
  FETCH_PERSONAS_ACTION_TYPES.SUCCESS>(FETCH_PERSONAS_ACTION_TYPES.SUCCESS);

export const fetchPersonasFailure = createAction<FetchPersonasFailurePayload,
  FETCH_PERSONAS_ACTION_TYPES.FAILURE>(FETCH_PERSONAS_ACTION_TYPES.FAILURE);
