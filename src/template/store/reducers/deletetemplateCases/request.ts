import { CaseReducer } from '@reduxjs/toolkit';
import { omitFromObject } from '../../../../_shared/utils';
import { DeleteTemplateRequestAction } from '../../types/deleteTemplate';
import { TemplateState } from '../../types/general';

export const requestCase: CaseReducer<
  TemplateState,
  DeleteTemplateRequestAction
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
