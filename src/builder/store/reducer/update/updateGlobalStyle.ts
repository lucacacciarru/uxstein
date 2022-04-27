import { CaseReducer } from '@reduxjs/toolkit';
import { BuilderState } from '../../types';
import { UpdateGlobalStyleAction } from '../../types/update';

export const updateGlobalStyleCase: CaseReducer<
  BuilderState,
  UpdateGlobalStyleAction
> = (state, action) => {
  return {
    ...state,
    globalStyle: {
      ...state.globalStyle,
      ...action.payload,
    },
  };
};
