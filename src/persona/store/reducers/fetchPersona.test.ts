import { personaRootReducer } from './rootReducer';
import { Persona, PersonasData, PersonaState } from '../types/general';
import {
  fetchPersonasRequest,
  fetchPersonasSuccess,
  fetchPersonasFailure,
} from '../actions/fetchPersonas';

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
    builderData: {
      pageSettings: [],
      gridItems: {},
    },
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
      fetchPersonasRequest({ username: 'test' }),
    );
    expect(returnValue.rollbackData).toEqual(PERSONA_INITIAL_STATE.data);
  });

  test('rollbackData should be undefined and Personas data should be populate', () => {
    const returnValue = personaRootReducer(
      PERSONA_INITIAL_STATE,
      fetchPersonasSuccess(mockPersona),
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
          builderData: {
            pageSettings: [],
            gridItems: {},
          },
        },
      },
    };
    expect(returnValue.rollbackData).toBeUndefined();
    expect(returnValue.data).toEqual(expectData);
  });

  test('rollbackData should be undefined and Personas data should be populate', () => {
    const returnValue = personaRootReducer(
      PERSONA_INITIAL_STATE,
      fetchPersonasFailure([]),
    );

    expect(returnValue.rollbackData).toBeUndefined();
  });
});
