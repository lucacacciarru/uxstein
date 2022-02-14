import { CaseReducer } from '@reduxjs/toolkit';
import { LoginRequestAction, LoginState } from '..';

export const requestCase: CaseReducer<
  LoginState,
  LoginRequestAction
> = state => ({
  ...state,
  status: 'logging',
});
