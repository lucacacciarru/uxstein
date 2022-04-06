import { CaseReducer } from '@reduxjs/toolkit';
import { PersonaState } from '../../types/general';
import { CreatePersonaRequestAction } from '../../types/createPersona';

export const requestCase: CaseReducer<
  PersonaState,
  CreatePersonaRequestAction
> = (state, action) => ({
  ...state,
  rollbackData: {
    ...state.data,
  },
  data: {
    ...state.data,
    allIds: [
      ...state.data.allIds,
      action.payload.id
    ],
    byId: {
      ...state.data.byId,
      [action.payload.id]: {
        ...action.payload,
      },
    },
  },
});
