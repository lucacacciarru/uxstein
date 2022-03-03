import { createAction } from '@reduxjs/toolkit';
import {
  FetchPersonaFailurePayload,
  FetchPersonaPayload,
  FetchPersonaSuccessPayload,
  FETCHPERSONA_ACTION_TYPES,
} from '../types/fetchPersona';

export const fetchPersonaTrigger = createAction<
  FetchPersonaPayload,
  FETCHPERSONA_ACTION_TYPES.TRIGGER
>(FETCHPERSONA_ACTION_TYPES.TRIGGER);

export const fetchPersonaRequest = createAction<
  FetchPersonaPayload,
  FETCHPERSONA_ACTION_TYPES.REQUEST
>(FETCHPERSONA_ACTION_TYPES.REQUEST);

export const fetchPersonaSuccess = createAction<
  FetchPersonaSuccessPayload,
  FETCHPERSONA_ACTION_TYPES.SUCCESS
>(FETCHPERSONA_ACTION_TYPES.SUCCESS);

export const fetchPersonaFailure = createAction<
  FetchPersonaFailurePayload,
  FETCHPERSONA_ACTION_TYPES.FAILURE
>(FETCHPERSONA_ACTION_TYPES.FAILURE);
