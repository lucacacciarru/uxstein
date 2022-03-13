import { authRootReducer } from './rootReducer';
import { logoutFailure, logoutRequest, logoutSuccess } from '../actions/logout';
import { AuthState } from '../types';

const AUTH_INITIAL_STATE: AuthState = {
  status: 'logged',
  profile: { email: 'test@test.com', password: 'Test1234', username: 'Frank' },
};

describe('LOGOUT REDUCERS', () => {
  test('should logout request', () => {
    const returnValue = authRootReducer(AUTH_INITIAL_STATE, logoutRequest());
    expect(returnValue).toEqual({
      status: 'idle',
      profile: {
        email: 'test@test.com',
        password: 'Test1234',
        username: 'Frank',
      },
    });
  });
  test('should logout success', () => {
    const returnValue = authRootReducer(AUTH_INITIAL_STATE, logoutSuccess());
    expect(returnValue).toEqual({
      status: 'idle',
      profile: undefined,
    });
  });
  test('should logout failure', () => {
    const returnValue = authRootReducer(AUTH_INITIAL_STATE, logoutFailure({}));
    expect(returnValue).toEqual({
      status: 'idle',
      profile: undefined,
    });
  });
});
