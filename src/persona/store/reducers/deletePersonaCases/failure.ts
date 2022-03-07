import { CaseReducer } from '@reduxjs/toolkit';
import { DeletePersonaFailureAction } from '../../types/deletePersona';
import { PersonaState } from '../../types/general';

export const failureCase: CaseReducer<
  PersonaState,
  DeletePersonaFailureAction
> = state => ({
  ...state,
});
