import { runSaga } from 'redux-saga';
import { getStoreForTesting } from './getStoreForTesting';
import { CustomOptions } from './types';

export function createCustomSagaRunner(options?: CustomOptions) {
  const store = getStoreForTesting(options);

  return (saga: any, ...args: any[]) =>
    runSaga(
      {
        dispatch: store.dispatch,
        getState: store.getState,
      },
      saga,
      ...args,
    );
}
