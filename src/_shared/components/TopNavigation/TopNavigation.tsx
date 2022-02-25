import { Flex, Spacer } from '@chakra-ui/react';
import { FC } from 'react';
import { SearchBar } from '../SearchBar';
import { UserDropdown } from './Partials';

export const TopNavigation: FC = () => {
  return (
    <Flex px="8" py="4" role="top-nav">
      <Spacer />
      <SearchBar />
      <Spacer />
      <UserDropdown />
    </Flex>
  );
};
