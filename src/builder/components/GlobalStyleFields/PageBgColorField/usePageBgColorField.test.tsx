import {
  render,
  screen,
  fireEvent,
} from '../../../../_shared/testConfig/customRender';
import {
  renderHook,
  waitFor,
} from '../../../../_shared/testConfig/customRenderHook';
import { usePageBgcColorField } from './usePageBgColorField';

describe('usePageBgColorField', () => {
  test('should change the store as expected', async () => {
    const { result } = renderHook(() => usePageBgcColorField());

    const NEW_COLOR = '#010101';
    render(
      <input
        type="color"
        value={result.current.backgroundColor}
        onChange={result.current.setColor}
        data-testid="colorInput"
      />,
    );
    const input = screen.getByTestId('colorInput');

    fireEvent.change(input, { target: { value: NEW_COLOR } });

    await waitFor(() => {
      expect(result.current.backgroundColor).toBe(NEW_COLOR);
    });
  });
});
