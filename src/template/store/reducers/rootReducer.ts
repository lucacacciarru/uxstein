import { createReducer } from '@reduxjs/toolkit';
import {
  fetchTemplatesFailure,
  fetchTemplatesRequest,
  fetchTemplatesSuccess,
} from '../actions/fetchTemplates';
import {
  updateTemplateFailure,
  updateTemplateRequest,
  updateTemplateSuccess,
} from '../actions/updateTemplate';
import { TemplateState } from '../types/general';
import * as fetchTemplatesCase from './fetchTemplatesCases';
import * as updateTemplateCase from './updateTemplateCases';
import * as deleteTemplateCase from './deletetemplateCases';
import {
  deleteTemplateFailure,
  deleteTemplateRequest,
  deleteTemplateSuccess,
} from '../actions/deleteTemplate';

const INITIAL_STATE: TemplateState = {
  data: {
    allIds: [],
    byId: {},
  },
};
export const templateRootReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(fetchTemplatesRequest, fetchTemplatesCase.requestCase)
    .addCase(fetchTemplatesSuccess, fetchTemplatesCase.successCase)
    .addCase(fetchTemplatesFailure, fetchTemplatesCase.failureCase)
    .addCase(updateTemplateRequest, updateTemplateCase.requestCase)
    .addCase(updateTemplateSuccess, updateTemplateCase.successCase)
    .addCase(updateTemplateFailure, updateTemplateCase.failureCase)
    .addCase(deleteTemplateFailure, deleteTemplateCase.failureCase)
    .addCase(deleteTemplateRequest, deleteTemplateCase.requestCase)
    .addCase(deleteTemplateSuccess, deleteTemplateCase.successCase)
    .addDefaultCase(state => state);
});
