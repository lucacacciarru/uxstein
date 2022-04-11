import { Layout } from 'react-grid-layout';
import { renderHook, act } from '../../../_shared/testConfig/customRenderHook';
import { BlockSetup } from '../../hooks/useBlockSetup';
import { BuilderState } from '../../store/types';
import { useDroppablePage } from './useDroppablePage';

const INITIAL_ITEM: Layout = { i: 'existingId', h: 1, w: 1, x: 1, y: 1 };

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: ['existingId'],
  byId: {
    existingId: { attributes: {}, style: {}, type: 'text' },
  },
  pageSettings: [INITIAL_ITEM],
  entityId: 'any id',
  entityType: 'persona',
  title: 'any title',
};

const MOCK_BLOCK_SETUP: BlockSetup = {
  gridItemSettings: { attributes: {}, style: {}, type: 'text' },
  layoutSettings: { h: 1, w: 1, i: 'newItem' },
};

const NEW_ITEM: Layout = { h: 1, w: 1, i: 'newItem', x: 0, y: 0 };
const MOCK_EVENT = new Event('');

describe('useDroppablePage', () => {
  test('onDrop should add a matching new item into the store', () => {
    const { result } = renderHook(() => useDroppablePage(MOCK_BLOCK_SETUP), {
      mocks: { builder: MOCK_BUILDER_STATE },
    });

    expect(result.current.layout).toEqual([INITIAL_ITEM]);

    act(() => {
      if (result.current.gridLayoutProps.onDrop) {
        result.current.gridLayoutProps.onDrop(
          [INITIAL_ITEM, NEW_ITEM],
          NEW_ITEM,
          MOCK_EVENT,
        );
      }
    });

    expect(result.current.layout).toEqual([INITIAL_ITEM, NEW_ITEM]);
  });
});
