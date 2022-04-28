import { PayloadAction } from '@reduxjs/toolkit';
import { Persona } from './general';

export enum CREATE_PERSONA_ACTION_TYPES {
  TRIGGER = 'persona/create/trigger',
  REQUEST = 'persona/create/request',
  SUCCESS = 'persona/create/success',
  FAILURE = 'persona/create/failure',
}

export type CreatePersonaResponse = Persona;
export type CreatePersonaPayload = Persona;
export type CreatePersonaSuccessPayload = Persona;
export type CreatePersonaFailurePayload = { id: string };

export type CreatePersonaAction = PayloadAction<CreatePersonaPayload,
  CREATE_PERSONA_ACTION_TYPES.TRIGGER>;

export type CreatePersonaRequestAction = PayloadAction<CreatePersonaPayload,
  CREATE_PERSONA_ACTION_TYPES.REQUEST>;

export type CreatePersonaSuccessAction = PayloadAction<CreatePersonaSuccessPayload,
  CREATE_PERSONA_ACTION_TYPES.SUCCESS>;

export type CreatePersonaFailureAction = PayloadAction<CreatePersonaFailurePayload,
  CREATE_PERSONA_ACTION_TYPES.FAILURE>;
