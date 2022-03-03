import { takeLatest } from 'redux-saga/effects';
import { fetchPersonaTrigger } from '../actions/fetchPersona';
import { fetchPersonaSaga } from './fetchPersona';

export function* personaRootSaga() {
  yield takeLatest(fetchPersonaTrigger, fetchPersonaSaga);
}
