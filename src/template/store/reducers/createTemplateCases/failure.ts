import { CaseReducer } from '@reduxjs/toolkit';
import { CreateTemplateFailureAction } from '../../types/createTemplate';
import { TemplateState } from '../../types/general';

export const failureCase: CaseReducer<
  TemplateState,
  CreateTemplateFailureAction
> = state => ({
  ...state,
  data: {
    ...state.data,
    ...state.rollbackData,
  },
  rollbackData: undefined,
});
