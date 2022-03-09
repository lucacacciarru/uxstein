import { personaRootReducer } from './rootReducer';
import { Persona, PersonasData, PersonaState } from '../types/general';
import {
  fetchPersonaRequest,
  fetchPersonaSuccess,
  fetchPersonaFailure,
} from '../actions/fetchPersona';

const PERSONA_INITIAL_STATE: PersonaState = {
  data: {
    allIds: [],
    byId: {},
  },
};

const mockPersona: Persona[] = [
  {
    id: '1',
    src: 'anySrc',
    title: 'anyTitle',
    updatedAt: 0,
    createdAt: 0,
  },
];

describe('FETCHPERSONA REDUCER', () => {
  test('should return the initial state', () => {
    const returnValue = personaRootReducer(undefined, { type: '' });
    expect(returnValue).toEqual(PERSONA_INITIAL_STATE);
  });

  test('rollbackData should be equal to initialState data', () => {
    const returnValue = personaRootReducer(
      PERSONA_INITIAL_STATE,
      fetchPersonaRequest({ username: '' }),
    );
    expect(returnValue.rollbackData).toEqual(PERSONA_INITIAL_STATE.data);
  });

  test('rollbackData should be undefined and Personas data shoul be populate', () => {
    const returnValue = personaRootReducer(
      PERSONA_INITIAL_STATE,
      fetchPersonaSuccess(mockPersona),
    );

    const expectData: PersonasData = {
      allIds: ['1'],
      byId: {
        '1': {
          id: '1',
          src: 'anySrc',
          title: 'anyTitle',
          updatedAt: 0,
          createdAt: 0,
        },
      },
    };
    expect(returnValue.rollbackData).toBeUndefined();
    expect(returnValue.data).toEqual(expectData);
  });

  test('rollbackData should be undefined and Personas data shoul be populate', () => {
    const returnValue = personaRootReducer(
      PERSONA_INITIAL_STATE,
      fetchPersonaFailure({}),
    );

    expect(returnValue.rollbackData).toBeUndefined();
  });
});
