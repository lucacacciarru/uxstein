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
import { TranslationKey } from '../../types/i18n';
import { MaxLengthMessage } from '../MaxLengthMessage';
import { useTextInputModal } from './useTextInputModal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (nameValue: string) => void;
  textContent: {
    header: TranslationKey;
    inputPlaceholder: TranslationKey;
  };
};

export const TextInputModal: React.FC<Props> = ({
  isOpen,
  onClose,
  textContent,
  onSubmit,
}) => {
  const initialFocus = useRef(null);
  const { t } = useTranslation();

  const {
    checkAndConfirm,
    errorMessage,
    inputError,
    nameValue,
    onChangeInputRename,
  } = useTextInputModal(onSubmit, onClose);

  return (
    <>
      <Modal
        isCentered
        initialFocusRef={initialFocus}
        isOpen={isOpen}
        onClose={onClose}
        data-testid="inputTextModal"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t(textContent.header)}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isInvalid={inputError}>
              <Input
                ref={initialFocus}
                placeholder={t(textContent.inputPlaceholder) as string}
                onChange={onChangeInputRename}
              />
              <MaxLengthMessage maxLength={20}>{nameValue}</MaxLengthMessage>
              <FormErrorMessage>{errorMessage}</FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <HStack alignItems="center" justifyContent="center" w="full">
              <Button mr={3} onClick={checkAndConfirm}>
                {t('modal.textInputModal.confirmButton')}
              </Button>
              <Button variant="ghost" onClick={onClose}>
                {t('modal.textInputModal.cancelButton')}
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
