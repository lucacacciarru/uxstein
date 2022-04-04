import { AuthState } from '../../../auth/store';
import { renderHook } from '../../testConfig/customRenderHook';
import { PATHS } from '../../types/paths';
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
      initialRoutes: [PATHS.LOGIN],
    });

    expect(result.current.showNavigation).toBeTruthy();
  });

  test('showNavigation should return false if the path IS .../edit', () => {
    const { result } = renderHook(() => useLayoutApp(), {
      initialRoutes: [PATHS.EDIT_PERSONA],
      mocks: {
        auth: MOCK_AUTH_LOGGED_STATE,
      },
    });

    expect(result.current.showNavigation).toBeFalsy();
  });
});
