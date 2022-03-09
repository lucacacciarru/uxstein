import { CaseReducer } from '@reduxjs/toolkit';
import { PersonaState } from '../../types/general';
import { UpdatePersonaFailureAction } from '../../types/updatePersonaCases';

export const failureCase: CaseReducer<
  PersonaState,
  UpdatePersonaFailureAction
> = state => ({
  ...state,
  data: {
    ...state.data,
    ...state.rollbackData,
  },
  rollbackData: undefined,
});
