import { put, fork, takeLatest } from 'redux-saga/effects';
import { createSagaWithLoadingManagement } from '../../../_shared/store/loading';
import { initAuth } from '../actions/init';
import { loginTrigger } from '../actions/login';
import { logoutTrigger } from '../actions/logout';
import { PostAuthOptions } from '../types';
import { init } from './init';
import { loginSaga } from './login';
import { logoutSaga } from './logout';
import { postAuth } from './postAuth';

export function createAuthRootSaga(options: PostAuthOptions) {
  return function* authRootSaga() {
    yield takeLatest(
      initAuth,
      createSagaWithLoadingManagement(init, { key: 'auth' }),
    );
    yield takeLatest(
      loginTrigger,
      createSagaWithLoadingManagement(loginSaga, { key: 'auth' }),
    );
    yield takeLatest(
      logoutTrigger,
      createSagaWithLoadingManagement(logoutSaga, { key: 'auth' }),
    );

    /**
     * Triggers login/logout watchers
     */
    yield fork(postAuth, options);

    /**
     * Triggers auth initialization saga in case of already logged-in users.
     */
    yield put(initAuth());
  };
}
