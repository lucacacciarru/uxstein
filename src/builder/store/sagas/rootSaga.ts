import { takeLatest } from 'redux-saga/effects';
import { populateBuilderTrigger } from '../actions/populate';
import { populateBuilderSaga } from './populateBuilder';

export function* builderRootSaga() {
    yield takeLatest(
        populateBuilderTrigger,
        populateBuilderSaga
    )
}