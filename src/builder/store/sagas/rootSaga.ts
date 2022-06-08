import { Action } from 'redux';
import { takeLatest } from 'redux-saga/effects';
import { CREATE_PERSONA_ACTION_TYPES } from '../../../persona/store/types/createPersona';
import { UPDATE_PERSONA_ACTION_TYPES } from '../../../persona/store/types/updatePersona';
import { CREATE_TEMPLATE_ACTION_TYPES } from '../../../template/store/types/createTemplate';
import { UPDATE_TEMPLATE_ACTION_TYPES } from '../../../template/store/types/updateTemplate';
import { createSagaWithLoadingManagement } from '../../../_shared/store/loading';
import { LoadingKeys } from '../../../_shared/store/loading/types';
import { populateBuilderTrigger } from '../actions/populate';
import { BUILDER_ACTION_TYPES } from '../types';
import { clearIsDirty } from './clearIsDirty';
import { populateBuilderSaga } from './populateBuilder';
import { setIsDirty } from './setIsDirty';

const resolveUpdates = ({ type }: Action) => {
  const regex = new RegExp('^builder/update');
  return (
    type.match(regex) ||
    type === BUILDER_ACTION_TYPES.ADD ||
    type === BUILDER_ACTION_TYPES.DELETE
  );
};

const resolveSavings = ({ type }: Action) => {
  const saveCases = [
    UPDATE_PERSONA_ACTION_TYPES.SUCCESS,
    CREATE_PERSONA_ACTION_TYPES.SUCCESS,
    UPDATE_TEMPLATE_ACTION_TYPES.SUCCESS,
    CREATE_TEMPLATE_ACTION_TYPES.SUCCESS,
    populateBuilderTrigger,
  ];
  return saveCases.includes(type);
};

export function* builderRootSaga() {
  yield takeLatest(
    populateBuilderTrigger,
    createSagaWithLoadingManagement(populateBuilderSaga, {
      key: LoadingKeys.builder,
      dependsOn: [LoadingKeys.persona],
    }),
  );

  yield takeLatest(resolveUpdates, setIsDirty);
  yield takeLatest(resolveSavings, clearIsDirty);
}
