import { CaseReducer } from '@reduxjs/toolkit';
import { TemplateState } from '../../types/general';
import { FetchTemplatesFailureAction } from '../../types/fetchTemplates';

export const failureCase: CaseReducer<
  TemplateState,
  FetchTemplatesFailureAction
> = state => ({
  ...state,
  data: {
    ...state.data,
    ...state.rollbackData,
  },
  rollbackData: undefined,
});
