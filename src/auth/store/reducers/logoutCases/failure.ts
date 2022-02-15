import { CaseReducer } from '@reduxjs/toolkit';
import { AuthState, LogoutFailureAction } from '../..';

export const failureCase: CaseReducer<
  AuthState,
  LogoutFailureAction
> = state => ({ ...state, profile: undefined, status: 'idle' });
