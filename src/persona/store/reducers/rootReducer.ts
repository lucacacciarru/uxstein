import { createReducer } from '@reduxjs/toolkit';
import {
  fetchPersonaFailure,
  fetchPersonaRequest,
  fetchPersonaSuccess,
} from '../actions/fetchPersona';
import { PersonaState } from '../types/general';
import * as fetchPersonaCase from './fetchPersonaCases';

const INITIAL_STATE: PersonaState = {
  status: 'idle',
};
export const personaRootReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(fetchPersonaRequest, fetchPersonaCase.requestCase)
    .addCase(fetchPersonaSuccess, fetchPersonaCase.successCase)
    .addCase(fetchPersonaFailure, fetchPersonaCase.failureCase)
    .addDefaultCase(state => state);
});
