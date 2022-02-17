import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '../../Icon/Icon';

export const SearchBar: FC = () => {
  return (
    <InputGroup w="80">
      <Input placeholder="Search" />
      <InputRightElement
        children={<Icon name="Search" color="black.50" />}
        pr="2"
      />
    </InputGroup>
  );
};
