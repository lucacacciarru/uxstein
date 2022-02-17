import { authRootReducer } from './rootReducer';
import { loginRequest, loginSuccess } from '../actions/login';
import { AuthState } from '../types';

const AUTH_INITIAL_STATE: AuthState = {
  status: 'idle',
};

describe('LOGIN REDUCER', () => {
  test('should return the initial state', () => {
    const returnValue = authRootReducer(undefined, { type: '' });
    expect(returnValue).toEqual(AUTH_INITIAL_STATE);
  });
  test('shoud handle login request', () => {
    const returnValue = authRootReducer(
      AUTH_INITIAL_STATE,
      loginRequest({ email: '', password: '' }),
    );
    const expectedValue = {
      status: 'logging',
    };

    expect(returnValue).toEqual(expectedValue);
  });
  test('shoud handle login success', () => {
    const prevState: AuthState = {
      status: 'logging',
    };
    const returnValue = authRootReducer(
      prevState,
      loginSuccess({
        email: 'test@test.com',
        password: 'Test123',
        username: 'Frank',
      }),
    );
    const expectedValue = {
      status: 'logged',
      profile: {
        email: 'test@test.com',
        password: 'Test123',
        username: 'Frank',
      },
    };

    expect(returnValue).toEqual(expectedValue);
  });
});
