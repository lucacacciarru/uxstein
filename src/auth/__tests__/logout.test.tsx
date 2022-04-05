import { waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { LoadingKeys } from '../../_shared/store/loading/types';
import { getStoreForTesting } from '../../_shared/testConfig/getStoreForTesting';
import { AuthState } from '../store';
import { logoutTrigger } from '../store/actions/logout';

const initial_state: AuthState = {
  profile: {
    email: 'test@test.com',
    password: 'test',
    username: 'test',
  },
};

describe('logout', () => {
  test('profile inside auth state should be undefined if loginTrigger succeeds', async () => {
    fetchMock.doMock(() => Promise.resolve({}));

    const store = getStoreForTesting({ mocks: { auth: initial_state } });
    store.dispatch(logoutTrigger());

    await waitFor(() => {
      return store.getState().loading[LoadingKeys.auth].loading === 0;
    });

    expect(store.getState().auth.profile).toBeUndefined();
  });
  test('profile inside auth state should be undefined if loginTrigger fails', async () => {
    fetchMock.doMock(() => Promise.reject({}));

    const store = getStoreForTesting({ mocks: { auth: initial_state } });
    store.dispatch(logoutTrigger());

    await waitFor(() => {
      return store.getState().loading[LoadingKeys.auth].loading === 0;
    });

    expect(store.getState().auth.profile).toBeUndefined();
  });
});
