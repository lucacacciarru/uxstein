import { CaseReducer } from '@reduxjs/toolkit';
import { AuthState, LoginSuccessAction } from '../../types';

export const successCase: CaseReducer<AuthState, LoginSuccessAction> = (
  state,
  action,
) => ({
  ...state,
  status: 'logged',
  profile: action.payload,
});
