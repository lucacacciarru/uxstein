import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '../../../_shared/components';
import iconLibrary from '../../../_shared/components/Icon/iconLibrary';

export type BlockItemProps = {
  name: string;
  iconName: keyof typeof iconLibrary;
};

export const BlockItem: FC<BlockItemProps> = ({ name, iconName }) => {
  return (
    <Box
      border={'dark.s'}
      borderRadius="md"
      textAlign={'center'}
      w="24"
      minH="24"
      py="4"
    >
      <Icon name={iconName} size="8" />
      <h5>{name}</h5>
    </Box>
  );
};
