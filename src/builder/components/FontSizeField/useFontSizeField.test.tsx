import { renderHook, act } from '../../../_shared/testConfig/customRenderHook';
import { getBlockItemSettings } from '../../config/blockItemSettings';
import { AttributeName, BuilderState } from '../../store/types';
import { useFontSizeField } from './useFontSizeField';
type Params = {
  attributeName: AttributeName;
  styleKey: string;
  blockItemId: string;
};
const EXISTING_ID = 'exisindgId';
const MOCK_HOOK_PARAMS: Params = {
  attributeName: 'title',
  blockItemId: EXISTING_ID,
  styleKey: 'fontSize',
};

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: [EXISTING_ID],
  byId: {
    [EXISTING_ID]: getBlockItemSettings('text').gridItemSettings,
  },
  pageSettings: [{ i: EXISTING_ID, h: 1, w: 1, x: 1, y: 1 }],
};

describe('useFontSizeField', () => {
  test('should update "selected" when call select()', () => {
    const { result } = renderHook(() => useFontSizeField(MOCK_HOOK_PARAMS), {
      mocks: { builder: MOCK_BUILDER_STATE },
    });

    act(() => result.current.select('s'));

    expect(result.current.selected).toBe('s');
  });
});
