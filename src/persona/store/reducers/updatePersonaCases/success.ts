import { CaseReducer } from '@reduxjs/toolkit';
import { PersonaState } from '../../types/general';
import { UpdatePersonaSuccessAction } from '../../types/updatePersonaCases';

export const successCase: CaseReducer<
  PersonaState,
  UpdatePersonaSuccessAction
> = state => ({
  ...state,
  rollbackData: undefined,
});
