import { PayloadAction, Action } from '@reduxjs/toolkit';
import { ApiError, Persona } from './general';

export enum FETCH_PERSONA_ACTION_TYPES {
  TRIGGER = 'persona/fetchPersona/trigger',
  REQUEST = 'persona/fetchPersona/request',
  SUCCESS = 'persona/fetchPersona/success',
  FAILURE = 'persona/fetchPersona/failure',
}

export type FetchPersonaResponse = {
  data: Persona[];
};

export type FetchPersonaSuccessPayload = Persona[];
export type FetchPersonaFailurePayload = ApiError;

export type FetchPersonaAction = Action<FETCH_PERSONA_ACTION_TYPES.TRIGGER>;

export type FetchPersonaRequestAction =
  Action<FETCH_PERSONA_ACTION_TYPES.REQUEST>;

export type FetchPersonaSuccesssAction = PayloadAction<
  FetchPersonaSuccessPayload,
  FETCH_PERSONA_ACTION_TYPES.SUCCESS
>;

export type FetchPersonaFailureAction = PayloadAction<
  FetchPersonaFailurePayload,
  FETCH_PERSONA_ACTION_TYPES.FAILURE
>;
