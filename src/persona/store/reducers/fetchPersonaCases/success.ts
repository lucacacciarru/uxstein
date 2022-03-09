import { CaseReducer } from '@reduxjs/toolkit';
import { PersonaState } from '../../types/general';
import { FetchPersonaSuccesssAction } from '../../types/fetchPersona';
import { formatPersonaListToObject, createPersonaIdList } from '../../utils';

export const successCase: CaseReducer<
  PersonaState,
  FetchPersonaSuccesssAction
> = (state, action) => {
  return {
    ...state,
    data: {
      allIds: createPersonaIdList(action.payload),
      byId: formatPersonaListToObject(action.payload),
    },
    rollbackData: undefined,
  };
};
