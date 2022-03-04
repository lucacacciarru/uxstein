import { renderHook, act } from '../../_shared/testConfig/customRenderHook';
import { useSeletedBlock } from './useSelectedBlock';

describe('useSelectedBlock', () => {
  test('shoud return selectedBlockId = undefined if dont select a block', () => {
    const { result } = renderHook(() => useSeletedBlock());

    expect(result.current.selectedBlockId).toBeUndefined();
  });

  test('shoud return selectedBlockId = "existingId" if call selectBlock("existingId")', () => {
    const { result } = renderHook(() => useSeletedBlock(), {
      mocks: {
        builder: {
          allIds: ['existingId'],
          byId: { existingId: { attributes: {}, style: {}, type: 'text' } },
          pageSettings: [],
          selectedBlockId: undefined,
        },
        auth: {},
      },
    });

    act(() => result.current.selectBlock('existingId'));

    expect(result.current.selectedBlockId).toBe('existingId');
  });

  test('shoud return selectedBlockId = undefined if call clearSelection()', () => {
    const { result } = renderHook(() => useSeletedBlock(), {
      mocks: {
        builder: {
          allIds: ['existingId'],
          byId: { existingId: { attributes: {}, style: {}, type: 'text' } },
          pageSettings: [],
          selectedBlockId: undefined,
        },
        auth: {},
      },
    });

    act(() => result.current.selectBlock('existingId'));
    expect(result.current.selectedBlockId).toBe('existingId');

    act(() => {
      result.current.clearSelection();
    });
    expect(result.current.selectedBlockId).toBeUndefined();
  });
});
