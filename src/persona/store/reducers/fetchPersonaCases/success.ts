import { CaseReducer } from '@reduxjs/toolkit';
import { PersonaState } from '../../types/general';
import { FetchPersonaSuccesssAction } from '../../types/fetchPersona';

export const successCase: CaseReducer<
  PersonaState,
  FetchPersonaSuccesssAction
> = (state, action) => ({
  ...state,
  status: 'logged',
  personas: action.payload,
});
