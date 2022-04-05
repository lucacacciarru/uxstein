import { CaseReducer } from '@reduxjs/toolkit';
import { TemplateState } from '../../types/general';
import { UpdateTemplateFailureAction } from '../../types/updateTemplate';

export const failureCase: CaseReducer<
  TemplateState,
  UpdateTemplateFailureAction
> = state => ({
  ...state,
  data: {
    ...state.data,
    ...state.rollbackData,
  },
  rollbackData: undefined,
});
