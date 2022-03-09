import { CaseReducer } from '@reduxjs/toolkit';
import { omitFromObject } from '../../../_shared/utils';
import { BuilderState } from '../types';
import { DeleteItemAction } from '../types/deleteItem';
import { deleteItemInsideList } from '../utils/deleteItemInsidePageSettings';

export const deleteItemCase: CaseReducer<BuilderState, DeleteItemAction> = (
  state,
  action,
) => {
  const id = action.payload.id;
  return {
    ...state,
    allIds: state.allIds.filter(item => item !== id),
    byId: omitFromObject(state.byId, id),
    pageSettings: deleteItemInsideList(state.pageSettings, id),
  };
};
