import { CaseReducer } from '@reduxjs/toolkit';
import { CreateTemplateSuccessAction } from '../../types/createTemplate';
import { TemplateState } from '../../types/general';
import { TEMP_ID } from '../../../../_shared/constants';
import { removeTemplateById } from '../../utils';

export const successCase: CaseReducer<
  TemplateState,
  CreateTemplateSuccessAction
> = (state, action) => ({
  ...state,
  rollbackData: undefined,
  data: {
    ...state.data,
    allIds: [
      ...state.data.allIds.map((id) => (id === TEMP_ID ? action.payload.id : id)),
    ],
    byId: {
      ...removeTemplateById(state.data.byId, TEMP_ID),
      [action.payload.id]: {
        ...state.data.byId[TEMP_ID],
        id: action.payload.id
      },
    },
  },
});
