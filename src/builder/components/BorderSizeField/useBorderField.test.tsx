import { renderHook, act } from '../../../_shared/testConfig/customRenderHook';
import { getBlockItemSettings } from '../../config/blockItemSettings';
import { BuilderState } from '../../store/types';
import { useBorderField } from './useBorderField';

type Params = {
  styleKey: string;
  blockItemId: string;
};
const EXISTING_ID = 'exsistingId';
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

describe('useBorderField', () => {
  test('should update "selected" when call select()', () => {
    const { result } = renderHook(() => useBorderField(MOCK_HOOK_PARAMS), {
      mocks: { builder: MOCK_BUILDER_STATE },
    });

    act(() => result.current.select('s'));

    expect(result.current.selected).toBe('s');
  });
});
