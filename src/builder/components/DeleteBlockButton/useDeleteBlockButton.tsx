import { useDisclosure } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDeleteBlock } from '../../hooks/useDeleteBlock';

export function useDeleteBlockButton(id: string) {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteBlock } = useDeleteBlock();

  const handlerDeleteButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      deleteBlock(id);
    },
    [deleteBlock, id],
  );

  const modalText = {
    title: t('builder.modal.deleteBlockTitle'),
    confirm: t('builder.modal.deleteBlockConfirm'),
    cancel: t('builder.modal.deleteBlockCancel'),
  };

  return {
    handlerDeleteButton,
    isOpen,
    onOpen,
    onClose,
    modalText,
  };
}
