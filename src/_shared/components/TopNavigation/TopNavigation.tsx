import { HStack, Spacer } from '@chakra-ui/react';
import { FC } from 'react';
import { SearchBar } from '../SearchBar';
import { UserDropdown } from './UserDropdown';

export const TopNavigation: FC = () => {
  return (
    <HStack p="8" role="top-nav" spacing="8">
      <Spacer />
      <SearchBar />
      <UserDropdown />
    </HStack>
  );
};
