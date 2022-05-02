import {
  Button,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalUploadImageBody } from './UploadImageModalBody';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue?: string;
  placeholder: string;
};

export const UploadImageModal: React.FC<Props> = ({
  isOpen,
  onChange,
  onClose,
  placeholder,
  inputValue,
}) => {
  const initialFocusInput = useRef(null);
  const { t } = useTranslation();

  return (
    <Modal
      isCentered
      initialFocusRef={initialFocusInput}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t('modal.imageModal.modalHeader')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <ModalUploadImageBody>
            <Input
              value={inputValue}
              onChange={onChange}
              placeholder={placeholder}
              ref={initialFocusInput}
              data-testid="input"
            />
          </ModalUploadImageBody>
        </ModalBody>

        <ModalFooter>
          <HStack alignItems="center" justifyContent="center" w="full">
            <Button onClick={onClose} mr={3}>
              {t('modal.imageModal.modalButton')}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
