import { CaseReducer } from '@reduxjs/toolkit';
import { BuilderState } from '../types';
import { UpdateLayoutAction } from '../types/updateLayout';

export const updateLayoutCase: CaseReducer<BuilderState, UpdateLayoutAction> = (
  state,
  action,
) => {
  const newPageSettings = state.pageSettings.map(item => {
    if (item.i === action.payload.id) {
      return {
        ...item,
        ...action.payload.properties,
      };
    }
    return item;
  });

  return {
    ...state,
    pageSettings: newPageSettings,
  };
};
