import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  templateId: string;
};

export const ModalDeleteTemplate: React.FC<Props> = ({
  isOpen,
  onClose,
  templateId,
}) => {
  const { t } = useTranslation();
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Stack alignItems="center" justifyContent="center">
            <Icon name="Deleted" size="9rem" />
            <Text as="h3" textStyle="h3">
              {t('template.modal.deleteTitle')}
            </Text>
          </Stack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="center">
          {t('template.modal.deleteBody')}
        </ModalBody>

        <ModalFooter>
          <HStack alignItems="center" justifyContent="center" w="full">
            <Button data-testid="confirmButton" variant="error" mr={3}>
              {t('template.modal.confirmButton')}
            </Button>
            <Button variant="ghost" onClick={onClose}>
              {t('template.modal.cancelButton')}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
