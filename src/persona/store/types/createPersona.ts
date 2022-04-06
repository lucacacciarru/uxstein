import { PayloadAction } from '@reduxjs/toolkit';
import { ApiError, Persona } from './general';

export enum CREATE_ACTION_TYPES {
  TRIGGER = 'persona/create/trigger',
  REQUEST = 'persona/create/request',
  SUCCESS = 'persona/create/success',
  FAILURE = 'persona/create/failure',
}

export type CreatePersonaResponse = {};

export type CreatePersonaPayload = Persona;

export type CreatePersonaSuccessPayload = {};
export type CreatePersonaFailurePayload = ApiError;

export type CreatePersonaAction = PayloadAction<
  CreatePersonaPayload,
  CREATE_ACTION_TYPES.TRIGGER
>;

export type CreatePersonaRequestAction = PayloadAction<
  CreatePersonaPayload,
  CREATE_ACTION_TYPES.REQUEST
>;

export type CreatePersonaSuccessAction = PayloadAction<
  CreatePersonaSuccessPayload,
  CREATE_ACTION_TYPES.SUCCESS
>;

export type CreatePersonaFailureAction = PayloadAction<
  CreatePersonaFailurePayload,
  CREATE_ACTION_TYPES.FAILURE
>;
