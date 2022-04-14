import { Box, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { PATHS } from '../../../_shared/types/paths';
import { NavButtonLink } from '../NavButtonLink/NavButtonLink';
import { LandingLinks } from '../NavBar/LandingLinks';
import { useNavLabels } from '../../hooks/useNavLabels';

export const DesktopNavBar: FC = () => {
  const { navLabels } = useNavLabels();
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
        <NavButtonLink to={PATHS.LOGIN} variant="ghost" color="brand.primary">
          {navLabels.login}
        </NavButtonLink>
        <NavButtonLink to={PATHS.SIGNUP}>{navLabels.signup}</NavButtonLink>
      </Box>
    </>
  );
};
