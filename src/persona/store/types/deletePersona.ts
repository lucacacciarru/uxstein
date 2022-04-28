import { PayloadAction } from '@reduxjs/toolkit';

export enum DELETE_PERSONA_ACTION_TYPES {
  TRIGGER = 'persona/deletePersona/trigger',
  REQUEST = 'persona/deletePersona/request',
  SUCCESS = 'persona/deletePersona/success',
  FAILURE = 'persona/deletePersona/failure',
}

export type DeletePersonaResponse = { id: string };
export type DeletePersonaPayload = { id: string };
export type DeletePersonaSuccessPayload = { id: string };
export type DeletePersonaFailurePayload = { id: string };

export type DeletePersonaAction = PayloadAction<DeletePersonaPayload,
  DELETE_PERSONA_ACTION_TYPES.TRIGGER>;

export type DeletePersonaRequestAction = PayloadAction<DeletePersonaPayload,
  DELETE_PERSONA_ACTION_TYPES.REQUEST>;

export type DeletePersonaSuccessAction = PayloadAction<DeletePersonaSuccessPayload,
  DELETE_PERSONA_ACTION_TYPES.SUCCESS>;

export type DeletePersonaFailureAction = PayloadAction<DeletePersonaFailurePayload,
  DELETE_PERSONA_ACTION_TYPES.FAILURE>;
