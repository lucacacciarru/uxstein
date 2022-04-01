import { useSelector } from 'react-redux';
import {
  renderHook,
  act,
  waitFor,
} from '../../../_shared/testConfig/customRenderHook';
import { getBlockItemSettings } from '../../config/blockItemSettings';
import { getGridItemById } from '../../store/selectors/getGridItemById';
import { AttributeName, BuilderState } from '../../store/types';
import { useFontSizeField } from './useFontSizeField';
type Params = {
  attributeName: AttributeName;
  styleKey: string;
  blockItemId: string;
};
const EXISTING_ID = 'existingId';
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
  personaId: 'any id',
  title: 'any title',
};

const useTestFontSizeField = () => {
  const { select, selected, sizes } = useFontSizeField(MOCK_HOOK_PARAMS);

  const storeFontSize = useSelector(getGridItemById(EXISTING_ID)).attributes
    .title?.style.fontSize;

  return {
    select,
    selected,
    storeFontSize,
    sizes,
  };
};

describe('useFontSizeField', () => {
  test('should update "selected" when call select()', async () => {
    const { result } = renderHook(() => useTestFontSizeField(), {
      mocks: { builder: MOCK_BUILDER_STATE },
    });

    act(() => result.current.select('s'));

    expect(result.current.selected).toBe('s');
    await waitFor(() => {
      expect(result.current.storeFontSize).toBe(
        result.current.sizes[result.current.selected],
      );
    });
  });
});
