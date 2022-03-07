import { useAuth } from './useAuth';
import { renderHook, act } from '../../_shared/testConfig/customRenderHook';
import { AuthState, User } from '../store';

const MOCK_PROFILE: User = {
  username: 'Frank',
  email: 'frak.enstain@mail.com',
  password: 'aa',
};

const MOCK_AUTH_STATE: AuthState = { status: 'logged', profile: MOCK_PROFILE };

describe('useAuth', () => {
  test('isLogged should be false by default', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.isLogged).toBeFalsy();
  });

  test('isLogged should be true if logged', () => {
    const { result } = renderHook(() => useAuth(), {
      mocks: {
        auth: MOCK_AUTH_STATE,
        persona: {
          data: {
            allIds: [],
            byId: {},
          },
        },
      },
    });

    expect(result.current.isLogged).toBeTruthy();
  });

  test('isLogged shoud be false if call logout', () => {
    const { result } = renderHook(() => useAuth(), {
      mocks: { auth: MOCK_AUTH_STATE },
    });

    expect(result.current.isLogged).toBeTruthy();

    act(() => result.current.logout());

    expect(result.current.isLogged).toBeFalsy();
  });

  test('profile should return undefined if NOT logged', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.profile).toBeUndefined();
  });

  test('profile should return a matching User if logged', () => {
    const { result } = renderHook(() => useAuth(), {
      mocks: {
        auth: { status: 'logged', profile: MOCK_PROFILE },
        persona: {
          data: {
            allIds: [],
            byId: {},
          },
        },
      },
    });

    expect(result.current.profile).toEqual(MOCK_PROFILE);
  });
});
