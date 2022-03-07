import { CaseReducer } from '@reduxjs/toolkit';
import { removePersonaById } from '../../utils/removePersonaById';
import { DeletePersonaSuccessAction } from '../../types/deletePersona';
import { PersonaState } from '../../types/general';

export const successCase: CaseReducer<
  PersonaState,
  DeletePersonaSuccessAction
> = (state, action) => ({
  ...state,
  personasData: {
    allIds: state.personasData.allIds.filter(id => id !== action.payload),
    byId: removePersonaById(state.personasData.byId, action.payload),
  },
});
