import { CaseReducer } from '@reduxjs/toolkit';
import { PersonaState } from '../../types/general';
import { FetchPersonaSuccesssAction } from '../../types/fetchPersona';
import { createAllIdsList, formatListToByIdObject } from '../../../../_shared/utils';

export const successCase: CaseReducer<
  PersonaState,
  FetchPersonaSuccesssAction
> = (state, action) => {
  return {
    ...state,
    data: {
      allIds: createAllIdsList(action.payload),
      byId: formatListToByIdObject(action.payload),
    },
    rollbackData: undefined,
  };
};
