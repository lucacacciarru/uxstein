import {
  renderHook,
  act,
  waitFor,
} from '../../_shared/testConfig/customRenderHook';
import { usePersona } from './usePersona';

describe('usePersona', () => {
  test('personas and personasAllids should be empty array by default', () => {
    const { result } = renderHook(() => usePersona());
    expect(result.current.personaAllIds).toEqual([]);
    expect(result.current.personas).toEqual([]);
  });

  test('personList should be full if the user has created persona before', () => {
    const { result } = renderHook(() => usePersona(), {
      mocks: {
        persona: {
          personasData: {
            allIds: ['1'],
            byId: {
              '1': {
                id: '1',
                src: 'https://www.susannafer.com/wordpress/wp-content/uploads/2020/10/esempio-personas-template-11.png',
                title: 'Test',
                createdAt: 0,
                updatedAt: 0,
              },
            },
          },
        },
      },
    });
    const expectAllIds = ['1'];
    const expectById = [
      {
        id: '1',
        src: 'https://www.susannafer.com/wordpress/wp-content/uploads/2020/10/esempio-personas-template-11.png',
        title: 'Test',
        createdAt: 0,
        updatedAt: 0,
      },
    ];
    expect(result.current.personaAllIds).toEqual(expectAllIds);
    expect(result.current.personas).toEqual(expectById);
  });
  test('test', () => {
    const personaDetails = {
      id: '1',
      src: 'https://www.susannafer.com/wordpress/wp-content/uploads/2020/10/esempio-personas-template-11.png',
      title: 'Test',
      createdAt: 0,
      updatedAt: 0,
    };

    const { result } = renderHook(() => usePersona(), {
      mocks: {
        persona: {
          personasData: {
            allIds: ['1'],
            byId: { '1': { ...personaDetails } },
          },
        },
      },
    });
    act(() => result.current.fetchPersonaList());
    waitFor(() => {
      expect(result.current.personaAllIds).toContain('1');
      expect(result.current.personas).toContain(personaDetails);
    });
  });
  test('if delete a person, it should not be on Allids and ById ', async () => {
    const personaDetails = {
      id: '1',
      src: 'https://www.susannafer.com/wordpress/wp-content/uploads/2020/10/esempio-personas-template-11.png',
      title: 'Test',
      createdAt: 0,
      updatedAt: 0,
    };

    const { result } = renderHook(() => usePersona(), {
      mocks: {
        persona: {
          personasData: {
            allIds: ['1'],
            byId: {
              '1': {
                ...personaDetails,
              },
            },
          },
        },
      },
    });

    act(() => result.current.deletePersona('1'));

    waitFor(() => {
      expect(result.current.personaAllIds).not.toContain('1');
      expect(result.current.personas).not.toContain(personaDetails);
    });
  });
});
