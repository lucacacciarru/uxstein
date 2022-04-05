import { waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { LoadingKeys } from '../../_shared/store/loading/types';
import { getStoreForTesting } from '../../_shared/testConfig/getStoreForTesting';
import { initAuth, postLogin, postLogout } from '../store/actions/init';
import * as storageUtils from '../utils/authToken';

const AUTH_TOKEN = 'authentication token';

const FAKE_USER = {
  email: 'any email',
  password: 'any password',
  username: 'any username',
  token: AUTH_TOKEN,
};

function createMockedStorage() {
  let storage = new Map<string, string>();

  return {
    getItem(key: string) {
      return storage.get(key) || null;
    },
    setItem(key: string, value: string) {
      storage.set(key, value);
    },
    removeItem(key: string) {
      storage.delete(key);
    },
    clear() {
      storage.clear();
    },
  };
}

function mockFetch(response?: Object) {
  fetchMock.doMock(() =>
    Promise.resolve({
      body: JSON.stringify(response || {}),
    }),
  );
}

describe('Authentication', () => {
  beforeEach(() => {
    mockFetch();
    Object.defineProperty(window, 'localStorage', {
      writable: true,
      configurable: true,
      value: createMockedStorage(),
    });
  });

  describe('init', () => {
    it('should check inside the session storage if the token is stored', () => {
      const getItemSpy = jest.spyOn(window.localStorage, 'getItem');
      const store = getStoreForTesting({
        mocks: {
          auth: { profile: FAKE_USER },
        },
      });
      store.dispatch(initAuth());

      expect(getItemSpy).toHaveBeenCalled();
    });

    it('should call the login api in case the token exists', async () => {
      const getItemSpy = jest.spyOn(window.localStorage, 'getItem');
      storageUtils.setAuthToken(AUTH_TOKEN);
      const store = getStoreForTesting({});

      mockFetch([FAKE_USER]);

      store.dispatch(initAuth());

      await waitFor(() => {
        return store.getState().loading[LoadingKeys.auth].loading === 0;
      });

      expect(getItemSpy).toHaveBeenCalled();
      expect(store.getState().auth.profile).toEqual(FAKE_USER);
    });
  });

  describe('login', () => {
    it('should set the token inside the storage after login', () => {
      const setAuthTokenSpy = jest.spyOn(storageUtils, 'setAuthToken');
      const store = getStoreForTesting({
        mocks: {
          auth: { profile: FAKE_USER },
        },
      });

      store.dispatch(postLogin(FAKE_USER));

      expect(setAuthTokenSpy).toHaveBeenCalled();
      expect(storageUtils.getAuthToken()).toBe(AUTH_TOKEN);
    });

    it('should call the additional postLogin sagas after a successful login', () => {
      const postLoginSaga = jest.fn();
      const store = getStoreForTesting({
        mocks: {
          auth: { profile: FAKE_USER },
        },
        postAuthOptions: {
          postLogin: [postLoginSaga],
        },
      });

      store.dispatch(postLogin(FAKE_USER));
      expect(postLoginSaga).toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('should remove the token inside the storage after logout', () => {
      const removeAuthTokenSpy = jest.spyOn(storageUtils, 'removeAuthToken');
      const store = getStoreForTesting({
        mocks: {
          auth: {
            status: 'idle',
            profile: FAKE_USER,
          },
        },
      });

      storageUtils.setAuthToken(AUTH_TOKEN);

      store.dispatch(postLogout());

      expect(removeAuthTokenSpy).toHaveBeenCalled();
      expect(storageUtils.getAuthToken()).toBe(null);
    });

    it('should call the additional postLogout sagas after a successful logout', async () => {
      const postLogoutSaga = jest.fn();
      const store = getStoreForTesting({
        mocks: {
          auth: { profile: FAKE_USER },
        },
        postAuthOptions: {
          postLogout: [postLogoutSaga],
        },
      });

      store.dispatch(postLogout());

      expect(postLogoutSaga).toHaveBeenCalled();
    });
  });
});
