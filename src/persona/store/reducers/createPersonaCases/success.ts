import { CaseReducer } from '@reduxjs/toolkit';
import { PersonaState } from '../../types/general';
import { CreatePersonaSuccessAction } from '../../types/createPersona';

export const successCase: CaseReducer<
  PersonaState,
  CreatePersonaSuccessAction
> = state => ({
  ...state,
  rollbackData: undefined,
});
