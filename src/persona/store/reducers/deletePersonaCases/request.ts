import { CaseReducer } from '@reduxjs/toolkit';
import { omitFromObject } from '../../../../_shared/utils';
import { DeletePersonaRequestAction } from '../../types/deletePersona';
import { PersonaState } from '../../types/general';

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
    byId: omitFromObject(state.data.byId, action.payload.id),
  },
});
