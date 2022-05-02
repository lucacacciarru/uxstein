import { CaseReducer } from '@reduxjs/toolkit';
import { createDefaultProfile } from '../../../utils/createDefaultProfile';
import { AuthState } from '../../types';
import { UpdateProfileFailureAction } from '../../types/updateProfile';

export const failureCase: CaseReducer<
  AuthState,
  UpdateProfileFailureAction
> = state => {
  const defaultProfile = createDefaultProfile(state.profile);
  return {
    ...state,
    profile: {
      ...state.profile,
      ...defaultProfile,
      ...state?.rollbackData,
    },
    rollbackData: undefined,
  };
};
