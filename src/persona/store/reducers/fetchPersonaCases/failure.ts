import { CaseReducer } from '@reduxjs/toolkit';
import { PersonaState } from '../../types/general';
import { FetchPersonaFailureAction } from '../../types/fetchPersona';

export const failureCase: CaseReducer<
  PersonaState,
  FetchPersonaFailureAction
> = state => ({
  ...state,
});
