import { CaseReducer } from '@reduxjs/toolkit';
import { AuthState } from '../../types';
import { UpdateProfileSuccessAction } from '../../types/updateProfile';

export const successCase: CaseReducer<
  AuthState,
  UpdateProfileSuccessAction
> = state => ({
  ...state,
  rollbackData: undefined,
});
