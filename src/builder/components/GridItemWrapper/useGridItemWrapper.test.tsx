import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { useGridItemWrapper } from './useGridItemWrapper';

const EXAMPLE_ID = 'any id';
const SELECTED_ID = 'selected id';

describe('useGridItemWrapper', () => {
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
          globalStyle: {
            backgroundColor: '',
            columnGap: 0,
            rowGap: 0,
            containerPaddingX: 0,
            containerPaddingY: 0,
          },
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
          globalStyle: {
            backgroundColor: '',
            columnGap: 0,
            rowGap: 0,
            containerPaddingX: 0,
            containerPaddingY: 0,
          },
          entityType: '',
          selectedBlockId: SELECTED_ID,
        },
      },
    });

    expect(result.current.opacity).toBe('1');
  });
});
