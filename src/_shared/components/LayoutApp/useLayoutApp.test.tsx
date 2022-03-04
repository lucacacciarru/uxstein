import { renderHook } from '../../testConfig/customRenderHook';
import { useLayoutApp } from './useLayoutApp';

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
        persona: {},
        auth: {
          status: 'logged',
          profile: {
            username: '',
          },
        },
      },
    });

    expect(result.current.showNavigation).toBeFalsy();
  });
});
