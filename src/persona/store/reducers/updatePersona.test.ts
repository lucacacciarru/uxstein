import {
  updatePersonaFailure,
  updatePersonaRequest,
  updatePersonaSuccess,
} from '../actions/updatePersona';
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
          gridItems: {},
          globalStyle: {
            backgroundColor: '#000000',
            columnGap: 0,
            rowGap: 0,
            containerPaddingX: 0,
            containerPaddingY: 0,
          },
        },
      },
    },
  },
};

describe('UPDATEPERSONA REDUCER', () => {
  test('should return the initial state', () => {
    const returnValue = personaRootReducer(PERSONA_INITIAL_STATE, { type: '' });
    expect(returnValue).toEqual(PERSONA_INITIAL_STATE);
  });
  test('Persona attributes should change and rollbackData should be the same as its previous state', () => {
    const returnValue = personaRootReducer(
      PERSONA_INITIAL_STATE,
      updatePersonaRequest({ id: '1', properties: { title: 'test' } }),
    );
    expect(returnValue.rollbackData).toEqual(PERSONA_INITIAL_STATE.data);
    expect(returnValue.data.byId['1'].title).toBe('test');
  });

  test('Persona attributes should back to previous state and rollbackData should be undefined', () => {
    const previousState = personaRootReducer(
      PERSONA_INITIAL_STATE,
      updatePersonaRequest({ id: '1', properties: { title: 'test' } }),
    );

    const returnValue = personaRootReducer(
      previousState,
      updatePersonaFailure({ id: '1' }),
    );

    expect(returnValue.rollbackData).toBeUndefined();
    expect(returnValue.data).toEqual(previousState.rollbackData);
  });

  test('Persona attributes should be same and rollbackData should be undefined', () => {
    const returnValue = personaRootReducer(
      PERSONA_INITIAL_STATE,
      updatePersonaSuccess(PERSONA_INITIAL_STATE.data.byId['1']),
    );

    expect(returnValue.rollbackData).toBeUndefined();
    expect(returnValue.data).toEqual(PERSONA_INITIAL_STATE.data);
  });
});
