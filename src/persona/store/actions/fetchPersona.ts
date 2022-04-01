import { createAction } from '@reduxjs/toolkit';
import {
  FetchPersonaFailurePayload,
  FetchPersonaSuccessPayload,
  FETCHPERSONA_ACTION_TYPES,
} from '../types/fetchPersona';

export const fetchPersonaTrigger = createAction(
  FETCHPERSONA_ACTION_TYPES.TRIGGER,
);

export const fetchPersonaRequest = createAction(
  FETCHPERSONA_ACTION_TYPES.REQUEST,
);

export const fetchPersonaSuccess = createAction<
  FetchPersonaSuccessPayload,
  FETCHPERSONA_ACTION_TYPES.SUCCESS
>(FETCHPERSONA_ACTION_TYPES.SUCCESS);

export const fetchPersonaFailure = createAction<
  FetchPersonaFailurePayload,
  FETCHPERSONA_ACTION_TYPES.FAILURE
>(FETCHPERSONA_ACTION_TYPES.FAILURE);
