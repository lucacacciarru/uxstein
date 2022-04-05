import { useDisclosure } from '@chakra-ui/react';
import { usePersonas } from '../../hook/usePersonas';

export function useOptionPersonaCard(id: string) {
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

  const { deletePersona, updatePersona } = usePersonas();

  const renamePersonaTitle = (name: string) => {
    updatePersona(id, { title: name });
  };

  const deleteSelectedPersona = () => {
    deletePersona(id);
  };

  return {
    isOpenRename,
    onCloseRename,
    onOpenRename,
    isOpenDelete,
    onCloseDelete,
    onOpenDelete,
    renamePersonaTitle,
    deleteSelectedPersona,
  };
}
