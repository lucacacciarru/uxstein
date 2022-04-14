import {
  BoxProps,
  Center,
  Portal,
  PortalManager,
  Stack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { DesktopNavBar } from '../DesktopNavBar/DesktopNavBar';
import { LogoButtonLink } from '../LogoButtonLink/LogoButtonLink';
import { MobileNavBar } from '../MobileNavBar/MobileNavBar';
import { useNavBar } from './useNavBar';

type Props = {
  gutter: BoxProps['h'];
};

export const NavBar: FC<Props> = ({ gutter }) => {
  const { containerProps, isMobile } = useNavBar();

  return (
    <PortalManager zIndex={999}>
      <Portal>
        <Stack {...containerProps} h={gutter}>
          <LogoButtonLink />
          {isMobile && (
            <Center data-testid="mobile-nav">
              <MobileNavBar gutter={gutter} />
            </Center>
          )}
          {!isMobile && (
            <Center data-testid="desktop-nav">
              <DesktopNavBar />
            </Center>
          )}
        </Stack>
      </Portal>
    </PortalManager>
  );
};
