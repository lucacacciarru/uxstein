import { AuthState } from '../store';

type State = { auth: AuthState }

export const baseSelector = (state: State) => state.auth;