import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';
import { TextInputModal } from '../../../_shared/components/TextInputModal';
import { ActionModal } from '../../../_shared/components/ActionModal';
import { useOptionTemplateCard } from './useOptionTemplateCard';

type Props = {
  templateId: string;
};

export const OptionTemplateCard: React.FC<Props> = ({ templateId }) => {
  const { t } = useTranslation();
  const {
    isOpenRename,
    onCloseRename,
    onOpenRename,
    isOpenDelete,
    onCloseDelete,
    onOpenDelete,
    deleteSelectedTemplate,
    renameTemplateTitle,
  } = useOptionTemplateCard(templateId);

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
      <TextInputModal
        isOpen={isOpenRename}
        onClose={onCloseRename}
        onSubmit={renameTemplateTitle}
        textContent={{
          inputPlaceholder: 'auth',
          header: 'auth',
          toast: 'auth',
        }}
      />
      <ActionModal
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        onSubmit={deleteSelectedTemplate}
        textContent={{ body: 'auth', header: 'auth', toast: 'auth' }}
      />
    </>
  );
};
