import { waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { LoadingKeys } from '../../_shared/store/loading/types';
import { getStoreForTesting } from '../../_shared/testConfig/getStoreForTesting';
import { User } from '../store';
import { loginTrigger } from '../store/actions/login';

const users: User[] = [
  { email: 'test@test.com', password: 'test', username: 'test', id: 'anyId' },
];

describe('login', () => {
  test('should populate the state', async () => {
    fetchMock.doMock(() => Promise.resolve({ body: JSON.stringify(users) }));

    const store = getStoreForTesting();
    store.dispatch(loginTrigger(users[0]));

    await waitFor(() => {
      return store.getState().loading[LoadingKeys.auth].loading === 0;
    });

    expect(store.getState().auth.profile).toEqual(users[0]);
  });
  test('profile inside auth state should be undefined', async () => {
    fetchMock.doMock(() => Promise.reject({ body: JSON.stringify(users) }));

    const store = getStoreForTesting();

    store.dispatch(loginTrigger(users[0]));

    await waitFor(() => {
      return store.getState().loading[LoadingKeys.auth].loading === 0;
    });
    expect(store.getState().auth.profile).toBeUndefined();
  });
});
