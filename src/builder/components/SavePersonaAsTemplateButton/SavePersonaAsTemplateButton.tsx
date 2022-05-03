import { IconButton, useDisclosure } from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';
import { TextInputModal } from '../../../_shared/components/TextInputModal';
import { useSavePersonaAsTemplateButton } from './useSavePersonaAsTemplateButton';

export const SavePersonaAsTemplateButton: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { savePersonaAsTemplate } = useSavePersonaAsTemplateButton();

  return (
    <>
      <IconButton
        aria-label="save-template"
        h="10"
        minW="20"
        variant="outlineBlack"
        icon={<Icon name="SaveTemplate" size="8" />}
        onClick={onOpen}
      />
      <TextInputModal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={templateName => savePersonaAsTemplate(templateName)}
        textContent={{
          header: 'builder.modal.savePersonaAsTemplateTitle',
          inputPlaceholder: 'builder.modal.savePersonaAsTemplatePlaceholder',
        }}
      />
    </>
  );
};
