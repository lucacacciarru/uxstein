import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';
import { ModalDeletePersona } from '../ModalDeletePersona';
import { ModalRenamePersona } from '../ModalRenamePersona';
import { usePersonaModal } from '../../../_shared/hooks/useOptionModal';

type Props = {
  personaId: string;
};

export const OptionPersonaCard: React.FC<Props> = ({ personaId }) => {
  const {
    isOpenRename,
    onCloseRename,
    onOpenRename,
    isOpenDelete,
    onCloseDelete,
    onOpenDelete,
  } = usePersonaModal();

  const { t } = useTranslation();
  return (
    <>
      <Menu>
        <MenuButton
          boxSize="8"
          zIndex="modal"
          position="absolute"
          top="3%"
          right="0"
          as={Box}
        >
          <Icon name="ThreeDots" color="black.50" />
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={onOpenRename}
            icon={<Icon name="Edit" color="black20" />}
          >
            {t('optionsCard.rename')}
          </MenuItem>
          <MenuItem
            onClick={onOpenDelete}
            icon={<Icon name="Delete" color="black20" />}
          >
            {t('optionsCard.delete')}
          </MenuItem>
        </MenuList>
      </Menu>
      <ModalDeletePersona
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        personaId={personaId}
      />
      <ModalRenamePersona
        isOpen={isOpenRename}
        onClose={onCloseRename}
        personaId={personaId}
      />
    </>
  );
};
