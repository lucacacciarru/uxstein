import { CaseReducer } from '@reduxjs/toolkit';
import { LoginState, LoginSuccessAction } from '..';

export const successCase: CaseReducer<LoginState, LoginSuccessAction> = (
  state,
  action,
) => ({
  ...state,
  status: 'logged',
  profile: action.payload,
});
