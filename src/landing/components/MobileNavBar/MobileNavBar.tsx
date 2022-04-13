import {
  BoxProps,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  PortalManager,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { PATHS } from '../../../_shared/types/paths';
import { NavLinkButton } from '../NavButtonLink/NavButtonLink';
import { HamburgerButton } from '../NavBar/HamburgerButton';
import { LandingLinks } from '../NavBar/LandingLinks';
import { useMobileNavBar } from './useMobileNavBar';

type Props = {
  gutter: BoxProps['h'];
};

export const MobileNavBar: FC<Props> = ({ gutter }) => {
  const { isOpen, onClose, onToggle, navBarLabels } = useMobileNavBar();
  return (
    <>
      <HamburgerButton onClick={onToggle} isOpen={isOpen} />
      <PortalManager zIndex={1}>
        <Drawer placement="left" isOpen={isOpen} onClose={onClose} size="md">
          <DrawerOverlay />
          <DrawerContent zIndex="1" pt={gutter}>
            <VStack alignContent="center" bg="brand.lighter" h="full" pb="4">
              <Spacer />
              <VStack>
                <LandingLinks />
              </VStack>

              <Spacer />
              <Flex justifyContent="center" flexWrap="wrap">
                <NavLinkButton to={PATHS.LOGIN} variant="ghost" color="black.0">
                  {navBarLabels.login}
                </NavLinkButton>
                <NavLinkButton to={PATHS.SIGNUP}>
                  {navBarLabels.signup}
                </NavLinkButton>
              </Flex>
            </VStack>
          </DrawerContent>
        </Drawer>
      </PortalManager>
    </>
  );
};
