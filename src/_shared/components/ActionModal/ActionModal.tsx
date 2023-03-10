import {
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { TranslationKey } from '../../types/i18n';
import { Icon } from '../Icon';
import { useActionModal } from './useActionModal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: Function;
  textContent: {
    header: TranslationKey;
    body: TranslationKey;
  };
};

export const ActionModal: React.FC<Props> = ({
  isOpen,
  onClose,
  textContent,
  onSubmit,
}) => {
  const { t } = useTranslation();
  const { onClick } = useActionModal({
    onSubmit,
    onClose,
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Stack alignItems="center" justifyContent="center">
            <Icon name="Deleted" size="28" />
            <Heading as="h3" size="h3">
              {t(textContent.header)}
            </Heading>
          </Stack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="center">{t(textContent.body)}</ModalBody>

        <ModalFooter>
          <HStack alignItems="center" justifyContent="center" w="full">
            <Button
              data-testid="confirmButton"
              variant="error"
              mr={3}
              onClick={onClick}
            >
              {t('modal.textInputModal.confirmButton')}
            </Button>
            <Button variant="ghost" onClick={onClose}>
              {t('modal.textInputModal.cancelButton')}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
