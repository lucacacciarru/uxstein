import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { SideNavigation } from '../SideNavigation';
import { TopNavigation } from '../TopNavigation';

export const LayoutApp = () => {
  return (
    <>
      <TopNavigation />
      <SideNavigation />
      <Flex ml={'32'}>
        <Outlet />
      </Flex>
      {
        // Footer
      }
    </>
  );
};
