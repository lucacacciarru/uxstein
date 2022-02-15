import { CaseReducer } from '@reduxjs/toolkit';
import { AuthState, LogoutSuccessAction } from '../..';

export const successCase: CaseReducer<
  AuthState,
  LogoutSuccessAction
> = state => ({ ...state, profile: undefined, status: 'logged' });
