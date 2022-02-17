import { Flex, Spacer } from '@chakra-ui/react';
import { FC } from 'react';
import { UserDropdown, SearchBar } from './Partials';

export const TopNavigation: FC = () => {
  return (
    <Flex px="8" py="4">
      <Spacer />
      <SearchBar />
      <Spacer />
      <UserDropdown />
    </Flex>
  );
};
