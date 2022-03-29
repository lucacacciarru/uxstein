import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';
import { ModalRenameTemplate } from '../ModalRenameTemplate';
import { usePersonaModal } from '../../../_shared/hooks/useOptionModal';
import { ModalDeleteTemplate } from '../ModalDeleteTemplate';

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
  } = usePersonaModal();
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
      <ModalRenameTemplate
        isOpen={isOpenRename}
        onClose={onCloseRename}
        templateId={templateId}
      />
      <ModalDeleteTemplate
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        templateId={templateId}
      />
    </>
  );
};
