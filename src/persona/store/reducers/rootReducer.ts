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
import * as updatePersonaCase from './updatePersonaCases';
import {
  updatePersonaFailure,
  updatePersonaRequest,
  updatePersonaSuccess,
} from '../actions/updatePersona';

const INITIAL_STATE: PersonaState = {
  data: {
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
    .addCase(updatePersonaRequest, updatePersonaCase.requestCase)
    .addCase(updatePersonaFailure, updatePersonaCase.failureCase)
    .addCase(updatePersonaSuccess, updatePersonaCase.successCase)
    .addDefaultCase(state => state);
});
