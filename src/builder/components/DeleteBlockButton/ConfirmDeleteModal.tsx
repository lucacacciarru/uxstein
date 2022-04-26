import {
  Button,
  HStack,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

type Props = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  modalText: {
    title: string;
    confirm: string;
    cancel: string;
  };
};

export const ConfirmDeleteModal: React.FC<Props> = ({
  id,
  isOpen,
  onClose,
  onClick,
  modalText,
}) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent textAlign={'center'}>
        <ModalHeader>{modalText.title}</ModalHeader>
        <ModalCloseButton />
        <ModalFooter>
          <HStack alignItems="center" justifyContent="center" w="full">
            <Button size="md" colorScheme="blue" mr={3} onClick={onClick}>
              {modalText.confirm}
            </Button>
            <Button size="md" variant="ghost" onClick={onClose}>
              {modalText.cancel}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
