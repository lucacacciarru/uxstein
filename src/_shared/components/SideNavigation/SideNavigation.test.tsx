import { SideNavigation } from './SideNavigation';
import { render, screen } from '../../testConfig/customRender';
import { CustomLink } from './Partials';
import { AuthState } from '../../../auth/store';

const MOCK_AUTH_LOGGED_STATE: AuthState = {
  status: 'logged',
  profile: {
    email: 'anyMail',
    password: 'anyPassword',
    username: 'anyUsername',
  },
};

describe('Side Navigation', () => {
  test('should render correctly', () => {
    render(<SideNavigation />);

    const sidenav = screen.getByRole('sidenav');

    expect(sidenav).toBeInTheDocument();
  });

  describe('-CustomLink', () => {
    test('should be active if the actual location match the destination one', () => {
      render(<CustomLink to="/my-personas" />, {
        mocks: {
          auth: MOCK_AUTH_LOGGED_STATE,
        },
        initialRoutes: ['/my-personas'],
      });

      const customLink = screen.getByTestId('sidenav-link');
      expect(customLink).toHaveAttribute('aria-details', 'active-link');
    });

    test('should NOT be active if the actual location DOES NOT match the destination one', async () => {
      render(<CustomLink to="/my-personas" />, {
        mocks: {
          auth: MOCK_AUTH_LOGGED_STATE,
        },
        initialRoutes: ['/my-templates'],
      });

      const customLink = screen.getByTestId('sidenav-link');
      expect(customLink).not.toHaveAttribute('aria-details', 'active-link');
    });
  });
});
