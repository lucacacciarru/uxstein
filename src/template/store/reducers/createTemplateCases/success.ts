import { CaseReducer } from '@reduxjs/toolkit';
import { CreateTemplateSuccessAction } from '../../types/createTemplate';
import { TemplateState } from '../../types/general';

export const successCase: CaseReducer<
  TemplateState,
  CreateTemplateSuccessAction
> = state => ({
  ...state,
  rollbackData: undefined,
});
