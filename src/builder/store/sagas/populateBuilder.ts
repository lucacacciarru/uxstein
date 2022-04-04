// TODO: add logic for failure case (if the id does not match a persona)
import { put, select } from 'redux-saga/effects';
import { getPersonaById } from '../../../persona/store/selectors/getPersonaById';
import { Persona } from '../../../persona/store/types/general';
import { setBuilder } from '../actions/set';
import { PopulateBuilderAction } from '../types/populate';
import { SetPayload } from '../types/set';

export function* populateBuilderSaga(action: PopulateBuilderAction) {
    const persona: Persona | undefined = yield select(getPersonaById(action.payload.personaId));
    if (persona) {
        const setPayload: SetPayload = { personaId: persona.id, title: persona.title, ...persona.builderData };
        yield put(setBuilder(setPayload));
    }
}