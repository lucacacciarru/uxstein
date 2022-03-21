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
import { ModalUploadImageBody } from './ModalUploadImageBody';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue?: string;
  placeholder: string;
};

export const ModalUploadImage: React.FC<Props> = ({
  isOpen,
  onClose,
  onChange,
  inputValue,
  placeholder,
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
        <ModalHeader>
          {t('builder.toolBar.attributes.image.modalHeader')}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <ModalUploadImageBody>
            <Input
              value={inputValue}
              onChange={onChange}
              placeholder={placeholder}
              ref={initialFocusInput}
            />
          </ModalUploadImageBody>
        </ModalBody>

        <ModalFooter>
          <HStack alignItems="center" justifyContent="center" w="full">
            <Button onClick={onClose} mr={3}>
              {t('builder.toolBar.attributes.image.modalButton')}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
