import { renderHook } from '../../_shared/testConfig/customRenderHook';
import { usePersona } from './usePersona';

describe('usePersona', () => {
  test('personList should be undefined by default', () => {
    const { result } = renderHook(() => usePersona());
    expect(result.current.personaList).toBeUndefined();
  });
  test('personList should be full if the user has created persona before', () => {
    const { result } = renderHook(() => usePersona(), {
      mocks: {
        auth: { profile: { username: 'test' } },
        persona: {},
      },
    });
    expect(result.current.personaList).toBeUndefined();
  });
  test('personList should be empty if the user not has created persona before', () => {
    const { result } = renderHook(() => usePersona(), {
      mocks: {
        auth: { profile: { username: 'test' } },
        persona: { personas: undefined },
      },
    });
    expect(result.current.personaList).toBeUndefined();
  });
  test('personList should be full if the user has created persona before', () => {
    const { result } = renderHook(() => usePersona(), {
      mocks: {
        auth: { profile: { username: 'test' } },
        persona: {
          personas: [
            {
              id: 'any_id',
              src: 'any_src',
              title: 'any_title',
              createdAt: 0,
              updatedAt: 0,
            },
          ],
        },
      },
    });
    expect(result.current.personaList).not.toBeUndefined();
  });
});
