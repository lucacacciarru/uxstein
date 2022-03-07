import { CaseReducer } from '@reduxjs/toolkit';
import { PersonaState } from '../../types/general';
import { FetchPersonaSuccesssAction } from '../../types/fetchPersona';
import { createIdList } from '../../utils/createIdList';
import { personaListToObject } from '../../utils/personaListToObject';

export const successCase: CaseReducer<
  PersonaState,
  FetchPersonaSuccesssAction
> = (state, action) => {
  return {
    ...state,
    personasData: {
      allIds: createIdList(action.payload),
      byId: personaListToObject(action.payload),
    },
  };
};
