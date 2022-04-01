import { ActionCreator, AnyAction } from 'redux';
import { all, fork, takeLatest } from 'redux-saga/effects';
import { PostAuthOptions, WorkerSaga } from '../types';
import { removeAuthTokenSaga, setAuthTokenSaga } from './authToken';
import { postLogin, postLogout } from '../actions/init';

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
    ...postLoginSagas.map(saga => wrapSagaWithWatcher(postLogin, saga)),
    ...postLogoutSagas.map(saga => wrapSagaWithWatcher(postLogout, saga)),
  ]);
}
