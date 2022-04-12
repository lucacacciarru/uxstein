import { CaseReducer } from '@reduxjs/toolkit';
import { PersonaState } from '../../types/general';
import { UpdatePersonaRequestAction } from '../../types/updatePersonaCases';

export const requestCase: CaseReducer<
  PersonaState,
  UpdatePersonaRequestAction
> = (state, action) => ({
  ...state,
  rollbackData: {
    ...state.data,
  },
  data: {
    ...state.data,
    byId: {
      ...state.data.byId,
      [action.payload.id]: {
        ...state.data.byId[action.payload.id],
        updatedAt: Date.now(),
        ...action.payload.properties,
      },
    },
  },
});
