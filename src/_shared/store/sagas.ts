import { all, fork, ForkEffect } from 'redux-saga/effects';
import { createAuthRootSaga, PostAuthOptions } from '../../auth/store';
import { personaRootSaga } from '../../persona/store/saga';

const DEFAULT_POST_AUTH_OPTIONS = {
  /**
   * Array of sagas that should be executed right after login.
   */
  postLogin: [],
  /**
   * Array of sagas that should be executed right after logout.
   */
  postLogout: [],
};

type CreateRootSagaOptions = {
  additionalSagas?: (() => Generator<ForkEffect<never>, void, unknown>)[];
  postAuthOptions?: PostAuthOptions;
};

export function createRootSaga({
  additionalSagas,
  postAuthOptions,
}: CreateRootSagaOptions = {}) {
  const authRootSaga = createAuthRootSaga({
    ...DEFAULT_POST_AUTH_OPTIONS,
    ...postAuthOptions,
    postLogin: [
      ...DEFAULT_POST_AUTH_OPTIONS.postLogin,
      ...(postAuthOptions?.postLogin || []),
    ],
    postLogout: [
      ...DEFAULT_POST_AUTH_OPTIONS.postLogout,
      ...(postAuthOptions?.postLogout || []),
    ],
  });
  const allSagas = [authRootSaga, personaRootSaga, ...(additionalSagas || [])];

  return function* rootSaga() {
    yield all(allSagas.map(saga => fork(saga)));
  };
}
