import { createAction } from '@reduxjs/toolkit';
import { getStoreForTesting } from '../../testConfig/getStoreForTesting';
import { wait } from '@testing-library/user-event/dist/utils';

const MOCK_ANY_ACTION_TYPE = 'any/mocked/action';
const MOCK_NOTIFICATION_ACTION_TYPE = 'notifications/mocked/action';
const MOCK_ANY_ACTION = createAction(MOCK_ANY_ACTION_TYPE);
const MOCK_NOTIFICATION_ACTION = createAction(MOCK_NOTIFICATION_ACTION_TYPE);

describe('NOTIFICATIONS STORE', () => {
  test('should generate a notification when a valid action is dispatched', async () => {
    const store = getStoreForTesting({
      mocks: {
        notifications: [],
      },
    });

    store.dispatch(MOCK_ANY_ACTION());
    const notifiableAction = store.getState().notifications.find((el) => el.actionType === MOCK_ANY_ACTION_TYPE);
    expect(notifiableAction).toBeDefined();
  });

  test('should not generate a notification when an action is dispatched by the notifications store', async () => {
    const store = getStoreForTesting({
      mocks: {
        notifications: [],
      },
    });

    store.dispatch(MOCK_NOTIFICATION_ACTION());
    const notifiableAction = store.getState().notifications.find((el) => el.actionType === MOCK_NOTIFICATION_ACTION_TYPE);
    expect(notifiableAction).toBeUndefined();
  });

  test('a notification should be automatically removed after a small delay', async () => {
    const store = getStoreForTesting({
      mocks: {
        notifications: [],
      },
    });

    store.dispatch(MOCK_ANY_ACTION());
    const notificationId = store.getState().notifications.find((el) => el.actionType === MOCK_ANY_ACTION_TYPE)?.id;
    expect(notificationId).toBeDefined();

    await wait(3000);
    const notification = store.getState().notifications.find((el) => el.id === notificationId);
    expect(notification).toBeUndefined();
  });
});

