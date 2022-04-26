import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FormExportModal } from './FormExportModal';
import { PreviewImageExportModal } from './PreviewImageExportModal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  exportSettings: {
    imagePreview: string | null;
    onChangeFileType: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
    fileType: string;
    nameFile: string;
  };
};

export const ExportModal: React.FC<Props> = ({
  exportSettings,
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();
  const { imagePreview, ...rest } = exportSettings;

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      data-testid="inputTextModal"
      size="lg"
    >
      <ModalOverlay />
      <ModalContent py="4">
        <ModalHeader textAlign="center">
          <Heading as="h3">{t('builder.modal.exportTitle')}</Heading>
          <Text as="p" textStyle="body-xs" color="black.80">
            {t('builder.modal.exportBody')}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Stack gap="8">
            <PreviewImageExportModal imagePreview={imagePreview} />
            <FormExportModal {...rest} />
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
