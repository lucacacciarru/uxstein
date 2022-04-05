import { CaseReducer } from '@reduxjs/toolkit';
import { DeleteTemplateFailureAction } from '../../types/deleteTemplate';
import { TemplateState } from '../../types/general';

export const failureCase: CaseReducer<
  TemplateState,
  DeleteTemplateFailureAction
> = state => ({
  ...state,
  data: {
    ...state.data,
    ...state.rollbackData,
  },
  rollbackData: undefined,
});
