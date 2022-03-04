import { SideNavigation } from './SideNavigation';
import { render, screen } from '../../testConfig/customRender';
import { CustomLink } from './Partials';
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
          auth: { status: 'logged', profile: { username: 'ss' } },
          persona: {},
        },
        initialRoutes: ['/my-personas'],
      });

      const customLink = screen.getByTestId('sidenav-link');
      expect(customLink).toHaveAttribute('aria-details', 'active-link');
    });

    test('should NOT be active if the actual location DOES NOT match the destination one', async () => {
      render(<CustomLink to="/my-personas" />, {
        mocks: {
          auth: { status: 'logged', profile: { username: 'ss' } },
          persona: {},
        },
        initialRoutes: ['/my-templates'],
      });

      const customLink = screen.getByTestId('sidenav-link');
      expect(customLink).not.toHaveAttribute('aria-details', 'active-link');
    });
  });
});
