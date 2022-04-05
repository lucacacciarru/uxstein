//TODO: Add updateTemplate and deleteTemplate
import { useDisclosure } from '@chakra-ui/react';
import { useTemplate } from '../../hook/useTemplate';

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

  const { deleteTemplate, updateTemplate } = useTemplate();

  const renameTemplateTitle = (name: string) => {
    updateTemplate(id, { name });
  };

  const deleteSelectedTemplate = () => {
    deleteTemplate(id);
  };

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
