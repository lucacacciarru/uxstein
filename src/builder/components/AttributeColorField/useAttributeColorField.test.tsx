import {
  render,
  fireEvent,
  screen,
} from '../../../_shared/testConfig/customRender';
import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { AttributeName } from '../../store/types';
import { useAttributeColorField } from './useAttributeColorField';
type Params = {
  attributeName: AttributeName;
  styleKey: string;
  styleValue: string;
  blockItemId: string;
};

const EXISTING_ID = 'exisindgId';
const MOCK_HOOK_PARAMS: Params = {
  attributeName: 'title',
  blockItemId: EXISTING_ID,
  styleKey: 'color',
  styleValue: '#000000',
};

describe('useFontSizeField', () => {
  test('should update "color" when call setNewColor()', () => {
    const { result } = renderHook(() =>
      useAttributeColorField(MOCK_HOOK_PARAMS),
    );

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
  });
});
