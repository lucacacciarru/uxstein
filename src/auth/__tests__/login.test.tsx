import { waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { getStoreForTesting } from '../../_shared/testConfig/getStoreForTesting';
import { User } from '../store';
import { loginTrigger } from '../store/actions/login';

const users: User[] = [
  { email: 'test@test.com', password: 'test', username: 'test' },
];

describe('login', () => {
  test('should populate the state', async () => {
    fetchMock.doMock(() => Promise.resolve({ body: JSON.stringify(users) }));

    const store = getStoreForTesting();
    store.dispatch(loginTrigger(users[0]));

    await waitFor(() => {
      return store.getState().loading['auth'].loading === 0;
    });

    expect(store.getState().auth.profile).toEqual(users[0]);
  });
  test('profile inside auth state should be undefined', async () => {
    fetchMock.doMock(() => Promise.reject({ body: JSON.stringify(users) }));

    const store = getStoreForTesting();

    store.dispatch(loginTrigger(users[0]));

    await waitFor(() => {
      return store.getState().loading['auth'].loading === 0;
    });
    expect(store.getState().auth.profile).toBeUndefined();
  });
});
