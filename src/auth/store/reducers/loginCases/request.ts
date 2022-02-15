import { CaseReducer } from '@reduxjs/toolkit';
import { LoginRequestAction, AuthState } from '../../types';

export const requestCase: CaseReducer<
  AuthState,
  LoginRequestAction
> = state => ({
  ...state,
  status: 'logging',
});
