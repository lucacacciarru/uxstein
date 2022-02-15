import { CaseReducer } from '@reduxjs/toolkit';
import { LoginFailureAction, AuthState } from '../../types';

export const failureCase: CaseReducer<
  AuthState,
  LoginFailureAction
> = state => ({
  ...state,
  status: 'idle',
  profile: undefined,
});
