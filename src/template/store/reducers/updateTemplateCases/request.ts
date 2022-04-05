import { CaseReducer } from '@reduxjs/toolkit';
import { TemplateState } from '../../types/general';
import { UpdateTemplateRequestAction } from '../../types/updateTemplate';

export const requestCase: CaseReducer<
  TemplateState,
  UpdateTemplateRequestAction
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
        ...action.payload.properties,
      },
    },
  },
});
