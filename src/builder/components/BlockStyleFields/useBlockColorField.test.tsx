import { useSelector } from 'react-redux';
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '../../../_shared/testConfig/customRender';
import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { getBlockItemSettings } from '../../config/blockItemSettings';
import { BuilderState } from '../../store/types';
import { useBlockColorField } from './useBlockColorField';
import { getGridItemById } from '../../store/selectors/getGridItemById';

type Params = {
  styleKey: string;
  blockItemId: string;
  styleValue: string;
};
const EXISTING_ID = 'exsistingId';
const MOCK_HOOK_PARAMS: Params = {
  blockItemId: EXISTING_ID,
  styleKey: 'borderColor',
  styleValue: '#000000',
};

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: [EXISTING_ID],
  byId: {
    [EXISTING_ID]: getBlockItemSettings('text').gridItemSettings,
  },
  pageSettings: [{ i: EXISTING_ID, h: 1, w: 1, x: 1, y: 1 }],
  entityId: 'any id',
  entityType: 'persona',
  title: 'any title',
  globalStyle: {
    backgroundColor: '',
    columnGap: 0,
    rowGap: 0,
  },
};

const useTestBlockColorField = () => {
  const { setColor } = useBlockColorField(MOCK_HOOK_PARAMS);

  const color = useSelector(getGridItemById(EXISTING_ID)).style.borderColor;

  return {
    color,
    setColor,
  };
};

describe('useBorderField', () => {
  test('should update "color" when call setColor()', async () => {
    const { result } = renderHook(() => useTestBlockColorField(), {
      mocks: { builder: MOCK_BUILDER_STATE },
    });

    render(
      <input
        type="color"
        onChange={result.current.setColor}
        value={result.current.color}
        data-testid="colorInput"
      />,
    );
    const input = screen.getByTestId('colorInput');
    fireEvent.change(input, { target: { value: '#1a1a1a' } });
    await waitFor(() => {
      expect(result.current.color).toBe('#1a1a1a');
    });
  });
});
