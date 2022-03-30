import { CaseReducer } from '@reduxjs/toolkit';
import { TemplateState } from '../../types/general';
import { FetchTemplatesRequestAction } from '../../types/fetchTemplates';

export const requestCase: CaseReducer<
  TemplateState,
  FetchTemplatesRequestAction
> = state => ({
  ...state,
  rollbackData: {
    ...state.data,
  },
});
