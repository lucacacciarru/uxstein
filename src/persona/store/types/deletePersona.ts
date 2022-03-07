import { PayloadAction } from '@reduxjs/toolkit';
import { ApiError } from './general';

export enum DELETEPERSONA_ACTION_TYPES {
  TRIGGER = 'persona/deletePersona/trigger',
  REQUEST = 'persona/deletePersona/request',
  SUCCESS = 'persona/deletePersona/success',
  FAILURE = 'persona/deletePersona/failure',
}

export type DeletePersonaResponse = {
  id: string;
};

export type DeletePersonaPayload = {
  id: string;
};

export type DeletePersonaSuccessPayload = string;
export type DeletePersonaFailurePayload = ApiError;

export type DeletePersonaAction = PayloadAction<
  DeletePersonaPayload,
  DELETEPERSONA_ACTION_TYPES.TRIGGER
>;

export type DeletePersonaRequestAction = PayloadAction<
  DeletePersonaPayload,
  DELETEPERSONA_ACTION_TYPES.REQUEST
>;

export type DeletePersonaSuccessAction = PayloadAction<
  DeletePersonaSuccessPayload,
  DELETEPERSONA_ACTION_TYPES.SUCCESS
>;

export type DeletePersonaFailureAction = PayloadAction<
  DeletePersonaFailurePayload,
  DELETEPERSONA_ACTION_TYPES.FAILURE
>;
