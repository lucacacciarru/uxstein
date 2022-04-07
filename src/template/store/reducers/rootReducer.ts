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
import * as fetchTemplatesCases from './fetchTemplatesCases';
import * as updateTemplateCases from './updateTemplateCases';
import * as deleteTemplateCases from './deleteTemplateCases';
import {
  deleteTemplateFailure,
  deleteTemplateRequest,
  deleteTemplateSuccess,
} from '../actions/deleteTemplate';
import * as createTemplateCases from './createTemplateCases';
import {
  createTemplateFailure,
  createTemplateRequest,
  createTemplateSuccess,
} from '../actions/createTemplate';

const INITIAL_STATE: TemplateState = {
  data: {
    allIds: [],
    byId: {},
  },
};
export const templateRootReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(fetchTemplatesRequest, fetchTemplatesCases.requestCase)
    .addCase(fetchTemplatesSuccess, fetchTemplatesCases.successCase)
    .addCase(fetchTemplatesFailure, fetchTemplatesCases.failureCase)
    .addCase(updateTemplateRequest, updateTemplateCases.requestCase)
    .addCase(updateTemplateSuccess, updateTemplateCases.successCase)
    .addCase(updateTemplateFailure, updateTemplateCases.failureCase)
    .addCase(deleteTemplateFailure, deleteTemplateCases.failureCase)
    .addCase(deleteTemplateRequest, deleteTemplateCases.requestCase)
    .addCase(deleteTemplateSuccess, deleteTemplateCases.successCase)
    .addCase(createTemplateFailure, createTemplateCases.failureCase)
    .addCase(createTemplateRequest, createTemplateCases.requestCase)
    .addCase(createTemplateSuccess, createTemplateCases.successCase)
    .addDefaultCase(state => state);
});
