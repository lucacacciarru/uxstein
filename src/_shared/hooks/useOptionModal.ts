import { useDisclosure } from '@chakra-ui/react';

export function usePersonaModal() {
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

  return {
    isOpenRename,
    onCloseRename,
    onOpenRename,
    isOpenDelete,
    onCloseDelete,
    onOpenDelete,
  };
}
