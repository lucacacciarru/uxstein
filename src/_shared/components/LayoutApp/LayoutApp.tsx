import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { SideNavigation } from '../SideNavigation';
import { TopNavigation } from '../TopNavigation';
import { useLayoutApp } from './useLayoutApp';

export const LayoutApp = () => {
  const { showNavigation, gutter } = useLayoutApp();
  return (
    <>
      {showNavigation && <TopNavigation />}
      {showNavigation && <SideNavigation />}
      <Flex pl={gutter}>
        <Outlet />
      </Flex>
      {
        // Footer
      }
    </>
  );
};
