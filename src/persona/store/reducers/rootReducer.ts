import { createReducer } from '@reduxjs/toolkit';
import {
  fetchPersonaFailure,
  fetchPersonaRequest,
  fetchPersonaSuccess,
} from '../actions/fetchPersona';
import {
  deletePersonaFailure,
  deletePersonaRequest,
  deletePersonaSuccess,
} from '../actions/deletePersona';
import { PersonaState } from '../types/general';
import * as fetchPersonaCase from './fetchPersonaCases';
import * as deletePersonaCase from './deletePersonaCases';

const INITIAL_STATE: PersonaState = {
  personasData: {
    allIds: [],
    byId: {},
  },
};
export const personaRootReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(fetchPersonaRequest, fetchPersonaCase.requestCase)
    .addCase(fetchPersonaSuccess, fetchPersonaCase.successCase)
    .addCase(fetchPersonaFailure, fetchPersonaCase.failureCase)
    .addCase(deletePersonaRequest, deletePersonaCase.requestCase)
    .addCase(deletePersonaFailure, deletePersonaCase.failureCase)
    .addCase(deletePersonaSuccess, deletePersonaCase.successCase)

    .addDefaultCase(state => state);
});
