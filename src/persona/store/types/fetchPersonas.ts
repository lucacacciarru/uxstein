import { PayloadAction } from '@reduxjs/toolkit';
import { Persona } from './general';

export enum FETCH_PERSONAS_ACTION_TYPES {
  TRIGGER = 'persona/fetchPersonas/trigger',
  REQUEST = 'persona/fetchPersonas/request',
  SUCCESS = 'persona/fetchPersonas/success',
  FAILURE = 'persona/fetchPersonas/failure',
}

export type FetchPersonasPayload = { username: string }
export type FetchPersonasResponse = Persona[];
export type FetchPersonasSuccessPayload = Persona[];
export type FetchPersonasFailurePayload = [];

export type FetchPersonasRequestAction =
  PayloadAction<FetchPersonasPayload, FETCH_PERSONAS_ACTION_TYPES.REQUEST>;

export type FetchPersonasSuccessAction = PayloadAction<FetchPersonasSuccessPayload,
  FETCH_PERSONAS_ACTION_TYPES.SUCCESS>;

export type FetchPersonasFailureAction = PayloadAction<FetchPersonasFailurePayload,
  FETCH_PERSONAS_ACTION_TYPES.FAILURE>;
