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
import { usePersonas } from '../../../persona/hook/usePersonas';
import { Icon } from '../../../_shared/components';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  personaId: string;
};

export const ModalDeletePersona: React.FC<Props> = ({
  isOpen,
  onClose,
  personaId,
}) => {
  const { deletePersona } = usePersonas();
  const { t } = useTranslation();
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Stack alignItems="center" justifyContent="center">
            <Icon name="Deleted" size="9rem" />
            <Text as="h3" textStyle="h3">
              {t('persona.modal.deleteTitle')}
            </Text>
          </Stack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="center">
          {t('persona.modal.deleteBody')}
        </ModalBody>

        <ModalFooter>
          <HStack alignItems="center" justifyContent="center" w="full">
            <Button
              data-testid="confirmButton"
              variant="error"
              mr={3}
              onClick={() => deletePersona(personaId)}
            >
              {t('persona.modal.confirmButton')}
            </Button>
            <Button variant="ghost" onClick={onClose}>
              {t('persona.modal.cancelButton')}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
