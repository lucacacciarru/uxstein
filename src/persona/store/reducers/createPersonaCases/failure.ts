import { CaseReducer } from '@reduxjs/toolkit';
import { PersonaState } from '../../types/general';
import { CreatePersonaFailureAction } from '../../types/createPersona';

export const failureCase: CaseReducer<
  PersonaState,
  CreatePersonaFailureAction
> = state => ({
  ...state,
  data: {
    ...state.data,
    ...state.rollbackData,
  },
  rollbackData: undefined,
});
