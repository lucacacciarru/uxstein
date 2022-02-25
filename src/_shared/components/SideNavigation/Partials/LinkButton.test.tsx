import { LinkButtons } from '.';
import { render, screen } from '../../../testConfig/customRender';

describe('LinkButton', () => {
  test('should not have className if isExtended = false', () => {
    render(<LinkButtons isExtended={false} />);

    expect(screen.getByTestId('linkButton')).not.toHaveClass('isExtended');
  });

  test('should have className if isExtended = true', () => {
    render(<LinkButtons isExtended={true} />);

    expect(screen.getByTestId('linkButton')).toHaveClass('isExtended');
  });
});
