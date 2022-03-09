import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
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
import { useCallback, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormRename } from './useFormRename';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  personaId: string;
};

export const ModalRenamePerson: React.FC<Props> = ({
  isOpen,
  onClose,
  personaId,
}) => {
  const {
    nameValue,
    onChangeInputRename,
    checkAndConfirmRename,
    inputError,
    errorMessage,
  } = useFormRename();

  const initialFocus = useRef(null);
  const { t } = useTranslation();

  const renderNameLength = useMemo(() => {
    return (
      <FormHelperText
        color={nameValue.length > 20 ? 'status.error' : 'black.50'}
      >
        {nameValue.length}/20
      </FormHelperText>
    );
  }, [nameValue]);

  const handlerConfirm = useCallback(() => {
    checkAndConfirmRename(personaId, onClose);
  }, [checkAndConfirmRename, onClose, personaId]);

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
          <FormControl isInvalid={inputError}>
            <Input
              value={nameValue}
              onChange={onChangeInputRename}
              ref={initialFocus}
              placeholder={t('renamePersonaModal.placeholder')}
            />
            {renderNameLength}
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <HStack alignItems="center" justifyContent="center" w="full">
            <Button onClick={handlerConfirm} mr={3}>
              {t('renamePersonaModal.confirmButton')}
            </Button>
            <Button variant="ghost" onClick={onClose}>
              {t('renamePersonaModal.cancelButton')}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
