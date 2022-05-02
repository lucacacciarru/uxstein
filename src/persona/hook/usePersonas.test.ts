import {
  renderHook,
  act,
  waitFor,
} from '../../_shared/testConfig/customRenderHook';
import { usePersonas } from './usePersonas';

describe('usePersona', () => {
  test('personas should be empty array by default', () => {
    const { result } = renderHook(() => usePersonas());
    expect(result.current.personas).toEqual([]);
  });

  test('personList should be full if the user has created persona before', () => {
    const { result } = renderHook(() => usePersonas(), {
      mocks: {
        persona: {
          data: {
            allIds: ['1'],
            byId: {
              '1': {
                id: '1',
                src: 'https://www.susannafer.com/wordpress/wp-content/uploads/2020/10/esempio-personas-template-11.png',
                title: 'Test',
                createdAt: 0,
                updatedAt: 0,
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
        },
      },
    });
    const expectById = [
      {
        id: '1',
        src: 'https://www.susannafer.com/wordpress/wp-content/uploads/2020/10/esempio-personas-template-11.png',
        title: 'Test',
        createdAt: 0,
        updatedAt: 0,
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
    ];
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

    const { result } = renderHook(() => usePersonas(), {
      mocks: {
        persona: {
          data: {
            allIds: ['1'],
            byId: {
              '1': {
                ...personaDetails,
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
        },
      },
    });
    act(() => result.current.fetchPersonaList());
    waitFor(() => {
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

    const { result } = renderHook(() => usePersonas(), {
      mocks: {
        persona: {
          data: {
            allIds: ['1'],
            byId: {
              '1': {
                ...personaDetails,
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
        },
      },
    });

    act(() => result.current.deletePersona('1'));

    waitFor(() => {
      expect(result.current.personas).not.toContain(personaDetails);
    });
  });
});
