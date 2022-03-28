import { LayoutApp } from '.';
import { render, screen } from '../../testConfig/customRender';

describe('LayoutApp', () => {
  test('shoud render correctly', () => {
    render(<LayoutApp />);
  });

  test('shoud display navigations if not in /app', () => {
    render(<LayoutApp />, { initialRoutes: ['/other-route'] });

    expect(screen.queryByRole('top-nav')).toBeInTheDocument();
    expect(screen.queryByRole('sidenav')).toBeInTheDocument();
  });

  test('shoud not display navigations if in .../edit', () => {
    render(<LayoutApp />, { initialRoutes: ['/anyId/edit'] });

    expect(screen.queryByRole('top-nav')).not.toBeInTheDocument();
    expect(screen.queryByRole('sidenav')).not.toBeInTheDocument();
  });
});
