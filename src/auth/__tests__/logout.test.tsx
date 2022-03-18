import { waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { getStoreForTesting } from '../../_shared/testConfig/getStoreForTesting';
import { User } from '../store';
import { loginSuccess } from '../store/actions/login';
import { logoutTrigger } from '../store/actions/logout';

const users: User[] = [
  { email: 'test@test.com', password: 'test', username: 'test' },
];

describe('logout', () => {
  test('profile inside auth state should be undefined if loginTrigger succeeds', async () => {
    fetchMock.doMock(() => Promise.resolve({ body: JSON.stringify(users) }));
    const store = getStoreForTesting();
    store.dispatch(loginSuccess(users[0]));
    store.dispatch(logoutTrigger());
    await waitFor(() => {
      return store.getState().loading['auth'].loading === 0;
    });
    expect(store.getState().auth.profile).toBeUndefined();
  });
  test('profile inside auth state should be undefined if loginTrigger fails', async () => {
    fetchMock.doMock(() => Promise.reject({ body: JSON.stringify(users) }));
    const store = getStoreForTesting();
    store.dispatch(loginSuccess(users[0]));
    store.dispatch(logoutTrigger());
    await waitFor(() => {
      return store.getState().loading['auth'].loading === 0;
    });
    expect(store.getState().auth.profile).toBeUndefined();
  });
});
