// TODO: add logic for failure case (if the id does not match a persona)
import { put, select } from 'redux-saga/effects';
import { getPersonaById } from '../../../persona/store/selectors/getPersonaById';
import { Persona } from '../../../persona/store/types/general';
import { setBuilder } from '../actions/set';
import { PopulateBuilderAction } from '../types/populate';
import { SetPayload } from '../types/set';
import { Template } from '../../../template/store/types/general';
import { getTemplateById } from '../../../template/store/selectors/getTemplateById';
import { BuilderEntityType } from '../types';


export function* populateBuilderSaga(action: PopulateBuilderAction) {
  const entityType: BuilderEntityType = action.payload.entityType;

  const persona: Persona | undefined = yield select(getPersonaById(action.payload.entityId));
  if (persona) {
    const setPayload: SetPayload = {
      entityId: persona.id,
      entityType,
      title: persona.title, ...persona.builderData,
    };
    yield put(setBuilder(setPayload));
  }

  const template: Template | undefined = yield select(getTemplateById(action.payload.entityId));
  if (template) {
    const setPayload: SetPayload = {
      entityId: template.id,
      entityType,
      title: template.name, ...template.builderData,
    };
    yield  put(setBuilder(setPayload));
  }
}
