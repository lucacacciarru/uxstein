import { CaseReducer } from '@reduxjs/toolkit';
import { PersonaState } from '../../types/general';
import { FetchPersonaRequestAction } from '../../types/fetchPersona';

export const requestCase: CaseReducer<
  PersonaState,
  FetchPersonaRequestAction
> = state => ({
  ...state,
  status: 'logging',
});
