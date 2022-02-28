import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';

export const OptionPersonCard: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        boxSize="2rem"
        position="absolute"
        top="3%"
        right="0"
        as={Box}
      >
        <Icon name="ThreeDots" color="black.50" />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<Icon name="Edit" color="black20" />}>
          Modifica
        </MenuItem>
        <MenuItem icon={<Icon name="Delete" color="black20" />}>
          Elimina
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
