import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';

import { ActionModal } from '../../../_shared/components/ActionModal';
import { TextInputModal } from '../../../_shared/components/TextInputModal';
import { useOptionPersonaCard } from './useOptionPersonaCard';

type Props = {
  personaId: string;
};

export const OptionPersonaCard: React.FC<Props> = ({ personaId }) => {
  const { t } = useTranslation();

  const {
    isOpenRename,
    onCloseRename,
    onOpenRename,
    isOpenDelete,
    onCloseDelete,
    onOpenDelete,
    deleteSelectedPersona,
    renamePersonaTitle,
  } = useOptionPersonaCard(personaId);

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
            data-testid="buttonRenameModal"
            onClick={onOpenRename}
            icon={<Icon name="Edit" color="black20" />}
          >
            {t('optionsCard.rename')}
          </MenuItem>
          <MenuItem
            data-testid="buttonDeleteModal"
            onClick={onOpenDelete}
            icon={<Icon name="Delete" color="black20" />}
          >
            {t('optionsCard.delete')}
          </MenuItem>
        </MenuList>
      </Menu>

      <TextInputModal
        isOpen={isOpenRename}
        onClose={onCloseRename}
        onSubmit={renamePersonaTitle}
        textContent={{
          header: 'persona.modal.renameTitle',
          inputPlaceholder: 'persona.modal.renamePlaceholder',
        }}
      />
      <ActionModal
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        onSubmit={deleteSelectedPersona}
        textContent={{
          header: 'persona.modal.deleteTitle',
          body: 'persona.modal.deleteBody',
        }}
      />
    </>
  );
};
