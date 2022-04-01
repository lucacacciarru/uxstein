import { renderHook, act } from '../../_shared/testConfig/customRenderHook';
import { BuilderState } from '../store/types';
import { useSelectedBlock } from './useSelectedBlock';

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: ['existingId'],
  byId: { existingId: { attributes: {}, style: {}, type: 'text' } },
  pageSettings: [],
  selectedBlockId: undefined,
  personaId: 'any id',
  title: 'any title',
};

describe('useSelectedBlock', () => {
  test('should return selectedBlockId = undefined if dont select a block', () => {
    const { result } = renderHook(() => useSelectedBlock());

    expect(result.current.selectedBlockId).toBeUndefined();
  });

  test('should return selectedBlockId = "existingId" if call selectBlock("existingId")', () => {
    const { result } = renderHook(() => useSelectedBlock(), {
      mocks: { builder: MOCK_BUILDER_STATE },
    });

    act(() => result.current.selectBlock('existingId'));

    expect(result.current.selectedBlockId).toBe('existingId');
  });

  test('should return selectedBlockId = undefined if call clearSelection()', () => {
    const { result } = renderHook(() => useSelectedBlock(), {
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
