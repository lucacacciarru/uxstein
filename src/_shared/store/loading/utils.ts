import { all, put, select, take, fork } from 'redux-saga/effects';
import { resetLoading, setLoading, unsetLoading } from './actions';
import { getIsLoading } from './selectors';
import { LoadingKeys } from './types';

type LoadingManagementOptions = {
  key: LoadingKeys;
  dependsOn?: LoadingKeys[];
  forceReset?: boolean;
};

function* waitForSagasByKeys(keys: LoadingKeys[]) {
  yield all(
    keys.map(function* (key: LoadingKeys) {
      yield fork(function* () {
        while (true) {
          const isLoading: boolean = yield select(getIsLoading, key);
          if (!isLoading) {
            break;
          }
          yield take(unsetLoading);
        }
      });
    }),
  );
}

export function createSagaWithLoadingManagement<
  Saga extends (...args: any[]) => Generator<any, any, any> = () => any,
  >(saga: Saga, { key, forceReset, dependsOn }: LoadingManagementOptions) {
  return function* sagaWithLoadingManagement(...args: unknown[]) {
    yield put(setLoading({ key }));
    try {
      if (dependsOn) {
        yield waitForSagasByKeys(dependsOn);
      }
      yield saga(...args);
    } catch (e) {
    } finally {
      if (forceReset) {
        yield put(resetLoading({ key }));
        return;
      }

      yield put(unsetLoading({ key }));
    }
  };
}
