import { getStoreForTesting } from '../testConfig/getStoreForTesting';
import { createAction } from '@reduxjs/toolkit';
import { screen } from '../testConfig/customRender';
import { renderHook } from '../testConfig/customRenderHook';
import { useToastNotifier } from './useToastNotifier';
import { ToastNotificationsDictionary } from '../constants';
import { getLastNotification } from '../store/notifications/selectors';

const MOCK_MAPPED_ACTION_TYPE = 'mock/mapped/action';
const MOCK_UNMAPPED_ACTION_TYPE = 'mock/unmapped/action';
const MOCK_MAPPED_ACTION = createAction(MOCK_MAPPED_ACTION_TYPE);
const MOCK_UNMAPPED_ACTION = createAction(MOCK_UNMAPPED_ACTION_TYPE);
const MOCK_DICTIONARY: ToastNotificationsDictionary = {
  [MOCK_MAPPED_ACTION_TYPE]: { message: 'persona.toast.createPersonaSuccess' },
};

describe(`useToastNotifier hook`, () => {
  test('should not display a toast if the dispatched action is not mapped to a toast in the dictionary', async () => {
    const { waitForValueToChange } = renderHook(() => useToastNotifier(MOCK_DICTIONARY));
    const store = getStoreForTesting({
      mocks: {
        notifications: [],
      },
    });
    store.dispatch(MOCK_UNMAPPED_ACTION());

    await waitForValueToChange(() => getLastNotification(store.getState()), { timeout: false });

    const toast = screen.queryByTestId('toast');
    expect(toast).toBeNull();
  });

  test('should display a toast if the dispatched action is mapped to a toast in the dictionary', async () => {
    const { waitForValueToChange } = renderHook(() => useToastNotifier(MOCK_DICTIONARY));
    const store = getStoreForTesting({
      mocks: {
        notifications: [],
      },
    });
    store.dispatch(MOCK_MAPPED_ACTION());

    await waitForValueToChange(() => getLastNotification(store.getState()), { timeout: false });

    const toast = screen.getByTestId('toast');
    expect(toast).toBeInTheDocument();
  });


});
