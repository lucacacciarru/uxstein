import { CaseReducer } from '@reduxjs/toolkit';
import { BuilderState } from '../../types';
import { UpdatePageSettingsAction } from '../../types/update';

export const updatePageSettingsCase: CaseReducer<
  BuilderState,
  UpdatePageSettingsAction
> = (state, action) => {
  return {
    ...state,
    pageSettings: action.payload.pageSettings,
  };
};
