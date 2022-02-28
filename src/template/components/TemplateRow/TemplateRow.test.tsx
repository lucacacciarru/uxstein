import { TemplateRow } from '.';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '../../../_shared/testConfig/customRender';

describe('TemplateRow component', () => {
  test('Should be rendered', () => {
    render(<TemplateRow category="default" />);
  });
  test('Sx Button should be disable initially', () => {
    render(<TemplateRow category="mine" />);
    const controlButtonSx = screen.getByTestId('controlButtonsx');
    expect(controlButtonSx).toBeDisabled();
  });
  test('If click dx button for change positionX of carousel, button sx should be active', () => {
    render(<TemplateRow category="mine" />);
    const controlButtonSx = screen.getByTestId('controlButtonsx');
    const controlButtonDx = screen.getByTestId('controlButtondx');
    fireEvent.click(controlButtonDx);
    expect(controlButtonSx).not.toBeDisabled();
  });
  test('Dx button should be active initially', () => {
    render(<TemplateRow category="mine" />);
    const controlButtondx = screen.getByTestId('controlButtondx');
    expect(controlButtondx).not.toBeDisabled();
  });
  test('If the carousel can no longer be moved, the right button should be disabled', async () => {
    render(<TemplateRow category="mine" />);
    const controlButtondx = screen.getByTestId('controlButtondx');
    await waitFor(() => {
      fireEvent.click(controlButtondx);
      expect(controlButtondx).toBeDisabled();
    });
  });
});
