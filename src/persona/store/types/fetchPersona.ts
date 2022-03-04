import { PayloadAction } from '@reduxjs/toolkit';
import { ApiError, Persona } from './general';

export enum FETCHPERSONA_ACTION_TYPES {
  TRIGGER = 'persona/fetchPersona/trigger',
  REQUEST = 'persona/fetchPersona/request',
  SUCCESS = 'persona/fetchPersona/successs',
  FAILURE = 'persona/fetchPersona/failure',
}

export type FetchPersonaResponse = {
  data: Persona[];
};

export type FetchPersonaPayload = {
  username: string;
};

export type FetchPersonaSuccessPayload = Persona[];
export type FetchPersonaFailurePayload = ApiError;

export type FetchPersonaAction = PayloadAction<
  FetchPersonaPayload,
  FETCHPERSONA_ACTION_TYPES.TRIGGER
>;

export type FetchPersonaRequestAction = PayloadAction<
  FetchPersonaPayload,
  FETCHPERSONA_ACTION_TYPES.REQUEST
>;

export type FetchPersonaSuccesssAction = PayloadAction<
  FetchPersonaSuccessPayload,
  FETCHPERSONA_ACTION_TYPES.SUCCESS
>;

export type FetchPersonaFailureAction = PayloadAction<
  FetchPersonaFailurePayload,
  FETCHPERSONA_ACTION_TYPES.FAILURE
>;
