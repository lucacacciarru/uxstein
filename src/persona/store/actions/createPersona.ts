import { createAction } from '@reduxjs/toolkit';
import {
  CreatePersonaFailurePayload,
  CreatePersonaPayload,
  CreatePersonaSuccessPayload,
  CREATE_ACTION_TYPES,
} from '../types/createPersona';

export const createPersonaTrigger = createAction<
  CreatePersonaPayload,
  CREATE_ACTION_TYPES.TRIGGER
>(CREATE_ACTION_TYPES.TRIGGER);

export const createPersonaRequest = createAction<
  CreatePersonaPayload,
  CREATE_ACTION_TYPES.REQUEST
>(CREATE_ACTION_TYPES.REQUEST);

export const createPersonaSuccess = createAction<
  CreatePersonaSuccessPayload,
  CREATE_ACTION_TYPES.SUCCESS
>(CREATE_ACTION_TYPES.SUCCESS);

export const createPersonaFailure = createAction<
  CreatePersonaFailurePayload,
  CREATE_ACTION_TYPES.FAILURE
>(CREATE_ACTION_TYPES.FAILURE);
