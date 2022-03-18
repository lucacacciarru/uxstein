import { TemplateRow } from './TemplateRow';
import { render, screen } from '../../../_shared/testConfig/customRender';

describe('TemplateRow component', () => {
  test('Should be rendered', () => {
    render(<TemplateRow category="default" />);
  });
  test('Sx Button should be disabled initially', () => {
    render(<TemplateRow category="mine" />);
    const controlButtonSx = screen.getByTestId('controlButtonSx');
    expect(controlButtonSx).toBeDisabled();
  });
  test('Dx button should be active initially', () => {
    render(<TemplateRow category="mine" />);
    const controlButtonDx = screen.getByTestId('controlButtonDx');
    expect(controlButtonDx).not.toBeDisabled();
  });
});
