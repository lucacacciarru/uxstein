import { AuthState } from '../types';

type State = { auth: AuthState };

export const baseSelector = (state: State) => state.auth;
