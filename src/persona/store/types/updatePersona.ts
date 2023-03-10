import { PayloadAction } from '@reduxjs/toolkit';
import { Persona } from './general';

export enum UPDATE_PERSONA_ACTION_TYPES {
  TRIGGER = 'persona/update/trigger',
  REQUEST = 'persona/update/request',
  SUCCESS = 'persona/update/success',
  FAILURE = 'persona/update/failure',
}

export type UpdatePersonaResponse = Persona;
export type UpdatePersonaPayload = { id: string; properties: Omit<Partial<Persona>, 'id'> };
export type UpdatePersonaSuccessPayload = Persona;
export type UpdatePersonaFailurePayload = { id: string };

export type UpdatePersonaAction = PayloadAction<UpdatePersonaPayload,
  UPDATE_PERSONA_ACTION_TYPES.TRIGGER>;

export type UpdatePersonaRequestAction = PayloadAction<UpdatePersonaPayload,
  UPDATE_PERSONA_ACTION_TYPES.REQUEST>;

export type UpdatePersonaSuccessAction = PayloadAction<UpdatePersonaSuccessPayload,
  UPDATE_PERSONA_ACTION_TYPES.SUCCESS>;

export type UpdatePersonaFailureAction = PayloadAction<UpdatePersonaFailurePayload,
  UPDATE_PERSONA_ACTION_TYPES.FAILURE>;
