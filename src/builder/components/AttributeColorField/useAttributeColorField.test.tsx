import { useSelector } from 'react-redux';
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '../../../_shared/testConfig/customRender';
import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { getBlockItemSettings } from '../../config/blockItemSettings';
import { getGridItemById } from '../../store/selectors/getGridItemById';
import { AttributeName, BuilderState } from '../../store/types';
import { useAttributeColorField } from './useAttributeColorField';
type Params = {
  attributeName: AttributeName;
  styleKey: string;
  styleValue: string;
  blockItemId: string;
};

const EXISTING_ID = 'existingId';
const MOCK_HOOK_PARAMS: Params = {
  attributeName: 'title',
  blockItemId: EXISTING_ID,
  styleKey: 'color',
  styleValue: '#000000',
};
const MOCK_BUILDER_STATE: BuilderState = {
  allIds: [EXISTING_ID],
  byId: {
    [EXISTING_ID]: getBlockItemSettings('text').gridItemSettings,
  },
  pageSettings: [{ i: EXISTING_ID, h: 1, w: 1, x: 1, y: 1 }],
};

const useTestAttributeColorField = () => {
  const { color, setNewColor } = useAttributeColorField(MOCK_HOOK_PARAMS);

  const storeColorValue = useSelector(getGridItemById(EXISTING_ID)).attributes
    .title?.style.color;

  return {
    color,
    setNewColor,
    storeColorValue,
  };
};

describe('useFontSizeField', () => {
  test('should update "color" when call setNewColor()', async () => {
    const { result } = renderHook(() => useTestAttributeColorField(), {
      mocks: { builder: MOCK_BUILDER_STATE },
    });

    render(
      <input
        type="color"
        value={result.current.color}
        onChange={result.current.setNewColor}
        data-testid="colorInput"
      />,
    );
    const colorInput = screen.getByTestId('colorInput');
    fireEvent.change(colorInput, { target: { value: '#111111' } });

    expect(result.current.color).toBe('#111111');
    await waitFor(() => {
      expect(result.current.storeColorValue).toBe('#111111');
    });
  });
});
