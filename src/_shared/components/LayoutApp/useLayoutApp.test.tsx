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
  test('showNavigation should return true if the path is NOT .../edit', () => {
    const { result } = renderHook(() => useLayoutApp(), {
      initialRoutes: ['/login'],
    });

    expect(result.current.showNavigation).toBeTruthy();
  });

  test('showNavigation should return false if the path IS .../edit', () => {
    const { result } = renderHook(() => useLayoutApp(), {
      initialRoutes: ['/anyId/edit'],
      mocks: {
        auth: MOCK_AUTH_LOGGED_STATE,
      },
    });

    expect(result.current.showNavigation).toBeFalsy();
  });
});
