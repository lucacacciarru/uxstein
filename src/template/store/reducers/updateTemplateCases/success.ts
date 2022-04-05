import { CaseReducer } from '@reduxjs/toolkit';
import { TemplateState } from '../../types/general';
import { UpdateTemplateSuccessAction } from '../../types/updateTemplate';

export const successCase: CaseReducer<
  TemplateState,
  UpdateTemplateSuccessAction
> = state => ({
  ...state,
  rollbackData: undefined,
});
