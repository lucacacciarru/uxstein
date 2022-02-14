import { CaseReducer } from '@reduxjs/toolkit';
import { LoginFailureAction, LoginState } from '..';

export const failureCase: CaseReducer<
  LoginState,
  LoginFailureAction
> = state => ({
  ...state,
  status: 'idle',
  profile: undefined,
});
