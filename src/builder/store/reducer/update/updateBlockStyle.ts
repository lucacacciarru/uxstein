import { CaseReducer } from '@reduxjs/toolkit';
import { BuilderState } from '../../types';
import { UpdateBlockStyleAction } from '../../types/update';

export const updateBlockStyleCase: CaseReducer<
  BuilderState,
  UpdateBlockStyleAction
> = (state, action) => {
  const id = action.payload.blockId;
  return {
    ...state,
    byId: {
      ...state.byId,
      [id]: {
        ...state.byId[id],
        style: {
          ...state.byId[id].style,
          ...action.payload.style,
        },
      },
    },
  };
};
