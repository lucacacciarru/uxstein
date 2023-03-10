import { CaseReducer } from '@reduxjs/toolkit';
import { DeletePersonaSuccessAction } from '../../types/deletePersona';
import { PersonaState } from '../../types/general';

export const successCase: CaseReducer<
  PersonaState,
  DeletePersonaSuccessAction
> = state => ({
  ...state,
  rollbackData: undefined,
});
