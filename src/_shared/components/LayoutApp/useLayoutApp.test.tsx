import { AuthState } from '../../../auth/store';
import { renderHook } from '../../testConfig/customRenderHook';
import { useLayoutApp } from './useLayoutApp';

const MOCK_AUTH_LOGGED_STATE: AuthState = {
  status: 'logged',
  profile: {
    email: 'anyMail',
    password: 'anyPassword',
    username: 'anyUsername',
  },
};

describe('useLayoutApp', () => {
  test('showNavigation should return true if the path is NOT /app', () => {
    const { result } = renderHook(() => useLayoutApp(), {
      initialRoutes: ['/login'],
    });

    expect(result.current.showNavigation).toBeTruthy();
  });

  test('showNavigation should return false if the path IS /app', () => {
    const { result } = renderHook(() => useLayoutApp(), {
      initialRoutes: ['/app'],
      mocks: {
        auth: MOCK_AUTH_LOGGED_STATE,
      },
    });

    expect(result.current.showNavigation).toBeFalsy();
  });
});
