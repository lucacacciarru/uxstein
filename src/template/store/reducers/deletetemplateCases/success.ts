import { CaseReducer } from '@reduxjs/toolkit';
import { DeleteTemplateSuccessAction } from '../../types/deleteTemplate';
import { TemplateState } from '../../types/general';

export const successCase: CaseReducer<
  TemplateState,
  DeleteTemplateSuccessAction
> = state => ({
  ...state,
  rollbackData: undefined,
});
