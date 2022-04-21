import { createAction } from '@reduxjs/toolkit';
import {
  CreatePersonaFailurePayload,
  CreatePersonaPayload,
  CreatePersonaSuccessPayload,
  CREATE_PERSONA_ACTION_TYPES,
} from '../types/createPersona';

export const createPersonaTrigger = createAction<
  CreatePersonaPayload,
  CREATE_PERSONA_ACTION_TYPES.TRIGGER
>(CREATE_PERSONA_ACTION_TYPES.TRIGGER);

export const createPersonaRequest = createAction<
  CreatePersonaPayload,
  CREATE_PERSONA_ACTION_TYPES.REQUEST
>(CREATE_PERSONA_ACTION_TYPES.REQUEST);

export const createPersonaSuccess = createAction<
  CreatePersonaSuccessPayload,
  CREATE_PERSONA_ACTION_TYPES.SUCCESS
>(CREATE_PERSONA_ACTION_TYPES.SUCCESS);

export const createPersonaFailure = createAction<
  CreatePersonaFailurePayload,
  CREATE_PERSONA_ACTION_TYPES.FAILURE
>(CREATE_PERSONA_ACTION_TYPES.FAILURE);
