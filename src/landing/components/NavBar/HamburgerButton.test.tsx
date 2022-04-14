import { render, screen } from '../../../_shared/testConfig/customRender';
import { HamburgerButton } from './HamburgerButton';

describe('HamburgerButton', () => {
  test('should be rendered correctly with aria-label=hamburger-button', () => {
    render(<HamburgerButton onClick={jest.fn()} isOpen={false} />);

    const hamburgerButton = screen.getByRole('toggle-nav-button');

    expect(hamburgerButton).toHaveAttribute('aria-label', 'hamburger-button');
  });

  test('should be rendered correctly with aria-label=hamburger-transformed-button', () => {
    render(<HamburgerButton onClick={jest.fn()} isOpen={true} />);

    const hamburgerButton = screen.getByRole('toggle-nav-button');

    expect(hamburgerButton).toHaveAttribute(
      'aria-label',
      'hamburger-transformed-button',
    );
  });
});
