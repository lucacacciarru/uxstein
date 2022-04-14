import { render, screen, waitFor } from '../../testConfig/customRender';
import userEvent from '@testing-library/user-event';
import { UserDropdown } from './UserDropdown';
import { PATHS } from '../../types/paths';

describe('UserDropdown', () => {
  test('menu list should be NOT visible by default', () => {
    render(<UserDropdown />);

    const openedMenu = screen.getByTestId('menu-list');

    expect(openedMenu).not.toBeVisible();
  });

  test('menu list should be expanded if user click ONCE on avatar', async () => {
    render(<UserDropdown />);
    const avatarButton = screen.getByRole('button');
    userEvent.click(avatarButton);
    const openedMenu = screen.getByTestId('menu-list');
    await waitFor(() => {
      expect(openedMenu).toBeVisible();
    });
  });

  test('menu list should be closed if user click TWICE on avatar', async () => {
    render(<UserDropdown />);
    const avatarButton = screen.getByRole('button');
    userEvent.click(avatarButton);
    const openedMenu = screen.getByTestId('menu-list');
    await waitFor(() => {
      expect(openedMenu).toBeVisible();
    });

    userEvent.click(avatarButton);
    await waitFor(() => {
      expect(openedMenu).not.toBeVisible();
    });
  });

  test('by default, should render Profile and Login links', () => {
    render(<UserDropdown />);
    const profileLink = screen.getByTestId('profile-link');
    const loginLink = screen.queryByTestId('login-link');
    const logoutButton = screen.queryByTestId('logout-button');

    expect(profileLink).toHaveAttribute('href', `/${PATHS.PROFILE}`);
    expect(loginLink).toHaveAttribute('href', `/${PATHS.LOGIN}`);
    expect(logoutButton).toBeNull();
  });

  test('when logged, should render Profile and Logout button, instead to Login link', () => {
    render(<UserDropdown />, {
      mocks: {
        auth: {
          status: 'logged',
          profile: {
            email: 'anyEmail',
            password: 'anyPassword',
            username: 'anyUsername',
          },
        },
        persona: {
          data: {
            allIds: [],
            byId: {},
          },
        },
      },
    });

    const profileLink = screen.getByTestId('profile-link');
    const loginLink = screen.queryByTestId('login-link');
    const logoutButton = screen.queryByTestId('logout-button');

    expect(profileLink).toHaveAttribute('href', `/${PATHS.PROFILE}`);
    expect(logoutButton).not.toBeNull();
    expect(loginLink).toBeNull();
  });
});
