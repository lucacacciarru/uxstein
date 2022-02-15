import { CaseReducer } from '@reduxjs/toolkit';
import { AuthState, LogoutRequestAction } from '../../types';

export const requestCase: CaseReducer<
  AuthState,
  LogoutRequestAction
> = state => ({
  ...state,
  status: 'logging',
});
