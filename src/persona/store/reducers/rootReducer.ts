import { createReducer } from '@reduxjs/toolkit';
import {
  fetchPersonasFailure,
  fetchPersonasRequest,
  fetchPersonasSuccess,
} from '../actions/fetchPersonas';
import {
  deletePersonaFailure,
  deletePersonaRequest,
  deletePersonaSuccess,
} from '../actions/deletePersona';
import { PersonaState } from '../types/general';
import * as fetchPersonaCase from './fetchPersonasCases';
import * as deletePersonaCase from './deletePersonaCases';
import * as updatePersonaCase from './updatePersonaCases';
import {
  updatePersonaFailure,
  updatePersonaRequest,
  updatePersonaSuccess,
} from '../actions/updatePersona';
import * as createPersonaCase from './createPersonaCases';
import {
  createPersonaFailure,
  createPersonaRequest,
  createPersonaSuccess,
} from '../actions/createPersona';

const INITIAL_STATE: PersonaState = {
  data: {
    allIds: [],
    byId: {},
  },
};
export const personaRootReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(fetchPersonasRequest, fetchPersonaCase.requestCase)
    .addCase(fetchPersonasSuccess, fetchPersonaCase.successCase)
    .addCase(fetchPersonasFailure, fetchPersonaCase.failureCase)
    .addCase(deletePersonaRequest, deletePersonaCase.requestCase)
    .addCase(deletePersonaFailure, deletePersonaCase.failureCase)
    .addCase(deletePersonaSuccess, deletePersonaCase.successCase)
    .addCase(updatePersonaRequest, updatePersonaCase.requestCase)
    .addCase(updatePersonaFailure, updatePersonaCase.failureCase)
    .addCase(updatePersonaSuccess, updatePersonaCase.successCase)
    .addCase(createPersonaRequest, createPersonaCase.requestCase)
    .addCase(createPersonaFailure, createPersonaCase.failureCase)
    .addCase(createPersonaSuccess, createPersonaCase.successCase)
    .addDefaultCase(state => state);
});
