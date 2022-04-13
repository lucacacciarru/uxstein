import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../../../landing/components/NavBar/NavBar';

const GUTTER = '28';

export const LandingLayout = () => {
  return (
    <>
      <NavBar gutter={GUTTER} />
      <Box pt={GUTTER}>
        <Outlet />
      </Box>
      {
        // Footer
      }
    </>
  );
};
