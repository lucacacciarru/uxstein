import { CaseReducer } from '@reduxjs/toolkit';
import { TEMP_ID } from '../../../../_shared/utils';
import { PersonaState } from '../../types/general';
import { CreatePersonaSuccessAction } from '../../types/createPersona';
import { removePersonaById } from '../../utils';

export const successCase: CaseReducer<PersonaState,
  CreatePersonaSuccessAction> = (state, action) => ({
  ...state,
  rollbackData: undefined,
  data: {
    ...state.data,
    allIds: [
      ...state.data.allIds.map((id) => (id === TEMP_ID ? action.payload.id : id)),
    ],
    byId: {
      ...removePersonaById(state.data.byId, TEMP_ID),
      [action.payload.id]: {
        ...state.data.byId[TEMP_ID],
      },
    },
  },
});
