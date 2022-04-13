import { render, screen } from '../../../_shared/testConfig/customRender';
import { NavBar } from './NavBar';
import * as mediaQueryHooks from '@chakra-ui/media-query';

const EXAMPLE_GUTTER = '10';

describe('NavBar', () => {
  describe('on desktop', () => {
    beforeEach(() => {
      jest
        .spyOn(mediaQueryHooks, 'useBreakpointValue')
        .mockReturnValue('desktop');
    });
    test('should render correctly on desktop', () => {
      render(<NavBar gutter={EXAMPLE_GUTTER} />, { initialRoutes: ['/'] });

      const desktopNav = screen.getByTestId('desktop-nav');
      const mobileNav = screen.queryByTestId('mobile-nav');

      expect(desktopNav).toBeInTheDocument();
      expect(mobileNav).not.toBeInTheDocument();
    });
  });
  describe(' on mobile', () => {
    beforeEach(() => {
      jest
        .spyOn(mediaQueryHooks, 'useBreakpointValue')
        .mockReturnValue('mobile');
    });
    test('should render correctly on mobile', () => {
      render(<NavBar gutter={EXAMPLE_GUTTER} />, { initialRoutes: ['/'] });

      const desktopNav = screen.queryByTestId('desktop-nav');
      const mobileNav = screen.getByTestId('mobile-nav');

      expect(mobileNav).toBeInTheDocument();
      expect(desktopNav).not.toBeInTheDocument();
    });
  });
});
