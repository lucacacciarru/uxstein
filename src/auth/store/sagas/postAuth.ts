import { ActionCreator, AnyAction } from 'redux';
import { all, fork, takeLatest } from 'redux-saga/effects';
import { logoutSuccess } from '../actions/logout';
import { loginSuccess } from '../actions/login';
import { PostAuthOptions, WorkerSaga } from '../types';
import { removeAuthTokenSaga, setAuthTokenSaga } from './authToken';

const DEFAULT_POST_LOGIN_SAGAS = [setAuthTokenSaga];

const DEFAULT_POST_LOGOUT_SAGAS = [removeAuthTokenSaga];

function* wrapSagaWithWatcher<A extends AnyAction>(
  actionCreator: ActionCreator<A>,
  worker: WorkerSaga<A>,
) {
  yield fork(function* wrapped() {
    yield takeLatest(actionCreator, worker);
  });
}

export function* postAuth(options: PostAuthOptions) {
  const postLoginSagas = [
    ...DEFAULT_POST_LOGIN_SAGAS,
    ...(options.postLogin || []),
  ];
  const postLogoutSagas = [
    ...DEFAULT_POST_LOGOUT_SAGAS,
    ...(options.postLogout || []),
  ];

  /**
   * Triggers login/logout watchers
   */
  yield all([
    ...postLoginSagas.map(saga => wrapSagaWithWatcher(loginSuccess, saga)),
    ...postLogoutSagas.map(saga => wrapSagaWithWatcher(logoutSuccess, saga)),
  ]);
}
