import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserDropdown } from './UserDropdown';
import { TestWrapper } from '../../TestWrapper';

describe('UserDropdown', () => {
  test('menu list should be NOT visible by default', () => {
    render(
      <TestWrapper>
        <UserDropdown />
      </TestWrapper>,
    );

    const openedMenu = screen.getByTestId('menu-list');

    expect(openedMenu).not.toBeVisible();
  });
  test('menu list should be expanded if user click ONCE on avatar', async () => {
    render(
      <TestWrapper>
        <UserDropdown />
      </TestWrapper>,
    );
    const avatarButton = screen.getByRole('button');
    userEvent.click(avatarButton);

    expect(avatarButton).toHaveAttribute('aria-expanded', 'true');
  });
  test('menu list should be closed if user click TWICE on avatar', async () => {
    render(
      <TestWrapper>
        <UserDropdown />
      </TestWrapper>,
    );
    const avatarButton = screen.getByRole('button');
    userEvent.dblClick(avatarButton);

    expect(avatarButton).toHaveAttribute('aria-expanded', 'false');
  });
  test('by default, should render Profile and Login links', () => {
    render(
      <TestWrapper>
        <UserDropdown />
      </TestWrapper>,
    );
    const profileLink = screen.getByTestId('profile-link');
    const loginLink = screen.queryByTestId('login-link');
    const logoutButton = screen.queryByTestId('logout-button');

    expect(profileLink).toHaveAttribute('href', '/profile');
    expect(loginLink).toHaveAttribute('href', '/login');
    expect(logoutButton).toBeNull();
  });
  test('when logged, should render Profile and Logout button, instead to Login link', () => {
    render(
      <TestWrapper isLogged>
        <UserDropdown />
      </TestWrapper>,
    );

    const profileLink = screen.getByTestId('profile-link');
    const loginLink = screen.queryByTestId('login-link');
    const logoutButton = screen.queryByTestId('logout-button');

    expect(profileLink).toHaveAttribute('href', '/profile');
    expect(logoutButton).not.toBeNull();
    expect(loginLink).toBeNull();

    screen.debug();
  });
});
