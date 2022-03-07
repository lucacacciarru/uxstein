import { CaseReducer } from '@reduxjs/toolkit';
import { DeletePersonaRequestAction } from '../../types/deletePersona';
import { PersonaState } from '../../types/general';

export const requestCase: CaseReducer<
  PersonaState,
  DeletePersonaRequestAction
> = state => ({ ...state });
