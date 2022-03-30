import { createReducer } from '@reduxjs/toolkit';
import {
  fetchTemplatesFailure,
  fetchTemplatesRequest,
  fetchTemplatesSuccess,
} from '../actions/fetchTemplates';
import { TemplateState } from '../types/general';
import * as fetchTemplatesCase from './fetchPersonaCases';

const INITIAL_STATE: TemplateState = {
  data: {
    allIds: [],
    byId: {},
  },
};
export const personaRootReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(fetchTemplatesRequest, fetchTemplatesCase.requestCase)
    .addCase(fetchTemplatesSuccess, fetchTemplatesCase.successCase)
    .addCase(fetchTemplatesFailure, fetchTemplatesCase.failureCase)
    .addDefaultCase(state => state);
});
