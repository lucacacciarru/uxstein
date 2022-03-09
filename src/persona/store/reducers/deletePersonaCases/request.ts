import { CaseReducer } from '@reduxjs/toolkit';
import { DeletePersonaRequestAction } from '../../types/deletePersona';
import { PersonaState } from '../../types/general';
import { removePersonaById } from '../../utils';

export const requestCase: CaseReducer<
  PersonaState,
  DeletePersonaRequestAction
> = (state, action) => ({
  ...state,
  rollbackData: {
    ...state.data,
  },
  data: {
    allIds: state.data.allIds.filter(id => id !== action.payload.id),
    byId: removePersonaById(state.data.byId, action.payload.id),
  },
});
