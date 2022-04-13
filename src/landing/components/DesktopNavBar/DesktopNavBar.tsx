import { Box, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { PATHS } from '../../../_shared/types/paths';
import { NavLinkButton } from '../NavButtonLink/NavButtonLink';
import { LandingLinks } from '../NavBar/LandingLinks';
import { useNavLabels } from '../../hooks/useNavLabels';

export const DesktopNavBar: FC = () => {
  const { navBar } = useNavLabels();
  return (
    <>
      <Stack
        justifyContent="center"
        w="full"
        flexDirection="row"
        left="0"
        pos="absolute"
      >
        <LandingLinks />
      </Stack>

      <Box>
        <NavLinkButton to={PATHS.LOGIN} variant="ghost" color="brand.primary">
          {navBar.login}
        </NavLinkButton>
        <NavLinkButton to={PATHS.SIGNUP}>{navBar.signup}</NavLinkButton>
      </Box>
    </>
  );
};
