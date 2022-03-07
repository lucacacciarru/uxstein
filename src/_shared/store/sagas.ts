import { all, fork, ForkEffect } from 'redux-saga/effects';
import { authRootSaga } from '../../auth/store';
import { personaRootSaga } from '../../persona/store/saga';

export const ALL_SAGAS = [authRootSaga, personaRootSaga];

export function createRootSaga(
  additionalSagas?: (() => Generator<ForkEffect<never>, void, unknown>)[],
) {
  function* rootSaga() {
    yield all(
      [...ALL_SAGAS, ...(additionalSagas || [])].map(saga => fork(saga)),
    );
  }

  return rootSaga;
}
