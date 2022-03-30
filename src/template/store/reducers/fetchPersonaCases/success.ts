import { CaseReducer } from '@reduxjs/toolkit';
import { TemplateState } from '../../types/general';
import { FetchTemplatesSuccesssAction } from '../../types/fetchTemplates';
import { createAllIdsList, formatListToByIdObject } from '../../../../_shared/utils';

export const successCase: CaseReducer<
  TemplateState,
  FetchTemplatesSuccesssAction
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
