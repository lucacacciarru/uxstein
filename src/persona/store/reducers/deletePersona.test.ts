import {
  deletePersonaFailure,
  deletePersonaRequest,
  deletePersonaSuccess,
} from '../actions/deletePersona';
import { PersonaState } from '../types/general';
import { personaRootReducer } from './rootReducer';

const PERSONA_INITIAL_STATE: PersonaState = {
  data: {
    allIds: ['1'],
    byId: {
      '1': {
        id: '1',
        src: 'anySrc',
        title: 'anyTitle',
        updatedAt: 0,
        createdAt: 0,
        builderData: {
          pageSettings: [],
          gridItems: {}
        }
      },
    },
  },
};

describe('DELETEPERSONA REDUCER', () => {
  test('should delete a selected Persona and rollbackData should be equal at PERSONA_INITIAL_STATE data', () => {
    const returnValue = personaRootReducer(
      PERSONA_INITIAL_STATE,
      deletePersonaRequest({ id: '1' }),
    );
    expect(returnValue.rollbackData).toEqual(PERSONA_INITIAL_STATE.data);
    expect(returnValue.data.allIds).not.toContain('1');
  });

  test('rollbackData should be undefined', () => {
    const returnValue = personaRootReducer(
      PERSONA_INITIAL_STATE,
      deletePersonaSuccess(''),
    );
    expect(returnValue.rollbackData).toBeUndefined();
  });

  test('should restore previus rollbackData to data state and actual rollbackData should be undefined', () => {
    const initialValue = personaRootReducer(
      PERSONA_INITIAL_STATE,
      deletePersonaRequest({ id: '1' }),
    );
    const returnValue = personaRootReducer(
      initialValue,
      deletePersonaFailure({}),
    );
    expect(returnValue.rollbackData).toBeUndefined();
    expect(returnValue.data).toEqual(initialValue.rollbackData);
  });
});
