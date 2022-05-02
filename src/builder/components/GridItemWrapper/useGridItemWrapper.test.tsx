import { renderHook, act } from '../../../_shared/testConfig/customRenderHook';
import { useSelectedBlock } from '../../hooks/useSelectedBlock';
import { useGridItemWrapper } from './useGridItemWrapper';

const EXAMPLE_ID = 'any id';
const SELECTED_ID = 'selected id';

const useTestHook = () => {
  const { selectedBlockId } = useSelectedBlock();

  const { select } = useGridItemWrapper(EXAMPLE_ID);

  return {
    select,
    selectedBlockId,
  };
};

describe('useGridItemWrapper', () => {
  test('select() should select an item with a specific id', () => {
    const { result } = renderHook(() => useTestHook());

    expect(result.current.selectedBlockId).toBeUndefined();

    act(() => {
      result.current.select();
    });

    expect(result.current.selectedBlockId).toBe(EXAMPLE_ID);
  });

  test('if no items selected, default opacity should be 1', () => {
    const { result } = renderHook(() => useGridItemWrapper(EXAMPLE_ID));

    expect(result.current.opacity).toBe('1');
  });

  test('if an item is selected, and it is not the actual, opacity should be different than 1', () => {
    const { result } = renderHook(() => useGridItemWrapper(EXAMPLE_ID), {
      mocks: {
        builder: {
          allIds: [SELECTED_ID, EXAMPLE_ID],
          byId: {},
          pageSettings: [],
          entityId: '',
          title: '',
          globalStyle: { backgroundColor: '', columnGap: 0, rowGap: 0 },
          entityType: '',
          selectedBlockId: SELECTED_ID,
        },
      },
    });

    expect(result.current.opacity).not.toBe('1');
  });

  test('if the item selected is the actual one, opacity should be 1', () => {
    const { result } = renderHook(() => useGridItemWrapper(SELECTED_ID), {
      mocks: {
        builder: {
          allIds: [SELECTED_ID, EXAMPLE_ID],
          byId: {},
          pageSettings: [],
          entityId: '',
          title: '',
          globalStyle: { backgroundColor: '', columnGap: 0, rowGap: 0 },
          entityType: '',
          selectedBlockId: SELECTED_ID,
        },
      },
    });

    expect(result.current.opacity).toBe('1');
  });
});
