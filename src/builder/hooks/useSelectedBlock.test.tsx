import { renderHook, act } from '../../_shared/testConfig/customRenderHook';
import { BuilderState } from '../store/types';
import { useSeletedBlock } from './useSelectedBlock';

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: ['existingId'],
  byId: { existingId: { attributes: {}, style: {}, type: 'text' } },
  pageSettings: [],
  selectedBlockId: undefined,
};

describe('useSelectedBlock', () => {
  test('shoud return selectedBlockId = undefined if dont select a block', () => {
    const { result } = renderHook(() => useSeletedBlock());

    expect(result.current.selectedBlockId).toBeUndefined();
  });

  test('shoud return selectedBlockId = "existingId" if call selectBlock("existingId")', () => {
    const { result } = renderHook(() => useSeletedBlock(), {
      mocks: { builder: MOCK_BUILDER_STATE },
    });

    act(() => result.current.selectBlock('existingId'));

    expect(result.current.selectedBlockId).toBe('existingId');
  });

  test('shoud return selectedBlockId = undefined if call clearSelection()', () => {
    const { result } = renderHook(() => useSeletedBlock(), {
      mocks: { builder: MOCK_BUILDER_STATE },
    });

    act(() => result.current.selectBlock('existingId'));
    expect(result.current.selectedBlockId).toBe('existingId');

    act(() => {
      result.current.clearSelection();
    });
    expect(result.current.selectedBlockId).toBeUndefined();
  });
});
