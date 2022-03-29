import {
  Button,
  FormControl,
  FormErrorMessage,
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
import { MaxLengthMessage } from '../../../_shared/components/MaxLengthMessage';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  templateId: string;
};

export const ModalRenameTemplate: React.FC<Props> = ({
  isOpen,
  onClose,
  templateId,
}) => {
  const initialFocus = useRef(null);
  const { t } = useTranslation();

  return (
    <Modal
      isCentered
      initialFocusRef={initialFocus}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t('renamePersonaModal.title')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <Input
              ref={initialFocus}
              placeholder={t('renamePersonaModal.placeholder')}
            />
            <MaxLengthMessage maxLength={20}>{''}</MaxLengthMessage>
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <HStack alignItems="center" justifyContent="center" w="full">
            <Button mr={3}>{t('renamePersonaModal.confirmButton')}</Button>
            <Button variant="ghost" onClick={onClose}>
              {t('renamePersonaModal.cancelButton')}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
