import { put } from 'redux-saga/effects';
import { resetLoading, setLoading, unsetLoading } from './actions';

type LoadingManagementOptions = {
  key: string;
  forceReset?: boolean;
};

export function createSagaWithLoadingManagement<
  Saga extends (...args: any[]) => Generator<any, any, any> = () => any,
>(saga: Saga, { key, forceReset }: LoadingManagementOptions) {
  return function* sagaWithLoadingManagement(...args: unknown[]) {
    yield put(setLoading({ key }));
    try {
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
