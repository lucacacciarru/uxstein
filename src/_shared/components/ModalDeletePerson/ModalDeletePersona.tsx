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
import { usePersona } from '../../../persona/hook/usePersona';
import { Icon } from '../Icon';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  idPersona: string;
};

export const ModalDeletePersona: React.FC<Props> = ({
  isOpen,
  onClose,
  idPersona,
}) => {
  const { deletePersona } = usePersona();
  const { t } = useTranslation();
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Stack alignItems="center" justifyContent="center">
            <Icon name="Deleted" size="9rem" />
            <Text as="h3" textStyle="h3">
              {t('deletePersona.title')}
            </Text>
          </Stack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="center">{t('deletePersona.body')}</ModalBody>

        <ModalFooter>
          <HStack alignItems="center" justifyContent="center" w="full">
            <Button
              variant="error"
              mr={3}
              onClick={() => deletePersona(idPersona)}
            >
              {t('deletePersona.confirmButton')}
            </Button>
            <Button variant="ghost" onClick={onClose}>
              {t('deletePersona.deleteButton')}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
