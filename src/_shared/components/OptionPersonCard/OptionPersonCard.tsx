import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';
import { ModalDeletePersona } from '../ModalDeletePerson';

type Props = {
  idPersona: string;
};

export const OptionPersonCard: React.FC<Props> = ({ idPersona }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { t } = useTranslation();
  return (
    <>
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
            {t('optionsCard.rename')}
          </MenuItem>
          <MenuItem
            onClick={onOpen}
            icon={<Icon name="Delete" color="black20" />}
          >
            {t('optionsCard.delete')}
          </MenuItem>
        </MenuList>
      </Menu>
      <ModalDeletePersona
        isOpen={isOpen}
        onClose={onClose}
        idPersona={idPersona}
      />
    </>
  );
};
