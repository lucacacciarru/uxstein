import { personaRootReducer } from '.';
import { PersonaState } from '../types/general';

const PERSONA_INITIAL_STATE: PersonaState = {
  personasData: {
    allIds: [],
    byId: {},
  },
};

describe('FETCHPERSONA REDUCER', () => {
  test('should return the initial state', () => {
    const returnValue = personaRootReducer(undefined, { type: '' });
    expect(returnValue).toEqual(PERSONA_INITIAL_STATE);
  });
});
