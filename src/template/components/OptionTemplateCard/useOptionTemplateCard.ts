//TODO: Add updateTemplate and deleteTemplate
import { useDisclosure } from '@chakra-ui/react';

export function useOptionTemplateCard(id: string) {
  const {
    isOpen: isOpenRename,
    onClose: onCloseRename,
    onOpen: onOpenRename,
  } = useDisclosure();

  const {
    isOpen: isOpenDelete,
    onClose: onCloseDelete,
    onOpen: onOpenDelete,
  } = useDisclosure();

  const renameTemplateTitle = (name: string) => {};

  const deleteSelectedTemplate = () => {};

  return {
    isOpenRename,
    onCloseRename,
    onOpenRename,
    isOpenDelete,
    onCloseDelete,
    onOpenDelete,
    renameTemplateTitle,
    deleteSelectedTemplate,
  };
}
