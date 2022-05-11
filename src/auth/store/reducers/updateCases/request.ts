import { CaseReducer } from '@reduxjs/toolkit';
import { createDefaultProfile } from '../../../utils/createDefaultProfile';
import { AuthState } from '../../types';
import { UpdateProfileRequestAction } from '../../types/updateProfile';

export const requestCase: CaseReducer<AuthState, UpdateProfileRequestAction> = (
  state,
  action,
) => {
  const defaultProfile = createDefaultProfile(state.profile);
  return {
    ...state,
    rollbackData: {
      ...state.profile,
    },
    profile: {
      ...state.profile,
      ...defaultProfile,
      ...action.payload.proprieties,
    },
  };
};
