import { CaseReducer } from '@reduxjs/toolkit';
import { CreateTemplateRequestAction } from '../../types/createTemplate';
import { TemplateState } from '../../types/general';

export const requestCase: CaseReducer<
  TemplateState,
  CreateTemplateRequestAction
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
      [action.payload.id]: action.payload
    },
  },
});
