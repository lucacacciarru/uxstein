import { CaseReducer } from '@reduxjs/toolkit';
import { PersonaState } from '../../types/general';
import { FetchPersonasRequestAction } from '../../types/fetchPersonas';

export const requestCase: CaseReducer<
  PersonaState,
  FetchPersonasRequestAction
> = state => ({
  ...state,
  rollbackData: {
    ...state.data,
  },
});
