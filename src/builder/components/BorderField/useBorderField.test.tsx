import { useSelector } from 'react-redux';
import {
  renderHook,
  act,
  waitFor,
} from '../../../_shared/testConfig/customRenderHook';
import { getBlockItemSettings } from '../../config/blockItemSettings';
import { getGridItemById } from '../../store/selectors/getGridItemById';
import { BuilderState } from '../../store/types';
import { useBorderField } from './useBorderField';

type Params = {
  styleKey: string;
  blockItemId: string;
};
const EXISTING_ID = 'existingId';
const MOCK_HOOK_PARAMS: Params = {
  blockItemId: EXISTING_ID,
  styleKey: 'borderWidth',
};

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: [EXISTING_ID],
  byId: {
    [EXISTING_ID]: getBlockItemSettings('text').gridItemSettings,
  },
  pageSettings: [{ i: EXISTING_ID, h: 1, w: 1, x: 1, y: 1 }],
};

const useTestBorderField = () => {
  const { select, selected, sizes } = useBorderField(MOCK_HOOK_PARAMS);

  const storeBorderWidth = useSelector(getGridItemById(EXISTING_ID)).style
    .borderWidth;

  return {
    select,
    selected,
    storeBorderWidth,
    sizes,
  };
};

describe('useBorderField', () => {
  test('should update "selected" when call select()', async () => {
    const { result } = renderHook(() => useTestBorderField(), {
      mocks: { builder: MOCK_BUILDER_STATE },
    });

    act(() => result.current.select('s'));

    expect(result.current.selected).toBe('s');
    await waitFor(() => {
      expect(result.current.storeBorderWidth).toBe(
        result.current.sizes[result.current.selected],
      );
    });
  });
});
