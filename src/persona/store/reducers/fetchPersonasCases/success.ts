import { CaseReducer } from '@reduxjs/toolkit';
import { PersonaState } from '../../types/general';
import { FetchPersonasSuccessAction } from '../../types/fetchPersonas';
import { createAllIdsList, formatListToByIdObject } from '../../../../_shared/utils';

export const successCase: CaseReducer<
  PersonaState,
  FetchPersonasSuccessAction
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
