import { CaseReducer } from '@reduxjs/toolkit';
import { PersonaState } from '../../types/general';
import { FetchPersonasFailureAction } from '../../types/fetchPersonas';

export const failureCase: CaseReducer<
  PersonaState,
  FetchPersonasFailureAction
> = state => ({
  ...state,
  data: {
    ...state.data,
    ...state.rollbackData,
  },
  rollbackData: undefined,
});
