// TODO: API ERROR
import { takeLatest, put, call } from 'redux-saga/effects';
import { loginFailure, loginRequest, loginSuccess, loginTrigger } from '../actions/login';
import { loginApi } from '../api/login';
import { LoginAction, LoginResponse } from '../types/login';

function* loginSaga(action: LoginAction) {
    yield put(loginRequest(action.payload))
    try {
        const response: LoginResponse = yield call(loginApi, action.payload.username, action.payload.password);
        yield put(loginSuccess(response.data))
    } catch (error) {
        yield put(loginFailure({}))
    }
}

export function* loginRootSaga() {
    yield takeLatest(loginTrigger, loginSaga)
}