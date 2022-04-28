import { CaseReducer } from '@reduxjs/toolkit';
import { BuilderState } from '../../types';
import { UpdateAction } from '../../types/update';

export const updateCase: CaseReducer<BuilderState, UpdateAction> = (
  state,
  action,
) => {
  return {
    ...state,
    ...action.payload,
  };
};
