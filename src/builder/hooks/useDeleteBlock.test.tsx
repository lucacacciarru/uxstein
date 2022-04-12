import { useSelector } from 'react-redux';
import { renderHook, act } from '../../_shared/testConfig/customRenderHook';
import { getBlockItemSettings } from '../config/blockItemSettings';
import { baseSelector } from '../store/selectors/baseSelector';
import { BuilderState } from '../store/types';
import { useDeleteBlock } from './useDeleteBlock';

const EXISTING_ID = 'existingId';

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: [EXISTING_ID],
  byId: {
    [EXISTING_ID]: getBlockItemSettings('text').gridItemSettings,
  },
  pageSettings: [{ i: EXISTING_ID, h: 1, w: 1, x: 1, y: 1 }],
  entityId: 'any id',
  entityType: 'persona',
  title: 'any title',
};

const useTestDeleteBlock = () => {
  const { deleteBlock } = useDeleteBlock();

  const store = useSelector(baseSelector);

  return {
    deleteBlock,
    store,
  };
};

describe('useDeleteBlock', () => {
  test('should delete the block from the store', () => {
    const { result } = renderHook(() => useTestDeleteBlock(), {
      mocks: { builder: MOCK_BUILDER_STATE },
    });

    act(() => result.current.deleteBlock(EXISTING_ID));

    expect(result.current.store.allIds).toEqual([]);
    expect(result.current.store.byId[EXISTING_ID]).toBeUndefined();
    expect(result.current.store.pageSettings).toEqual([]);
  });
});
