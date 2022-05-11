import { getStoreForTesting } from '../../_shared/testConfig/getStoreForTesting';
import { User } from '../store';
import { updateTrigger } from '../store/actions/update';
import { waitFor } from '@testing-library/react';
import { LoadingKeys } from '../../_shared/store/loading/types';

const users: User[] = [
  { email: 'test@test.com', password: 'test', username: 'test', id: 'anyId' },
];

const newUsername = 'newUsername';

describe('updateProfile', () => {
  test('if updateTrigger is called and it fail, profile do not should change', async () => {
    const { id, username } = users[0];
    fetchMock.doMock(() =>
      Promise.reject({ body: JSON.stringify(users[0].id) }),
    );
    const store = getStoreForTesting();

    store.dispatch(
      updateTrigger({ id, proprieties: { username: newUsername } }),
    );

    waitFor(() => {
      expect(store.getState().auth.profile?.username).toEqual(username);
    });
  });
  test('if updateTrigger is called, profile should change', async () => {
    const { id } = users[0];
    fetchMock.doMock(() => Promise.resolve({ body: JSON.stringify(users) }));
    const store = getStoreForTesting();
    store.dispatch(
      updateTrigger({ id, proprieties: { username: newUsername } }),
    );

    waitFor(() => {
      return store.getState().loading[LoadingKeys.auth].loading === 0;
    });
    expect(store.getState().auth.profile?.username).toEqual(newUsername);
  });
});
