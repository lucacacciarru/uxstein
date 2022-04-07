import { IconButton, useDisclosure } from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';
import { TextInputModal } from '../../../_shared/components/TextInputModal';

export const SaveAsTemplateButton: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="save-layout"
        h="10"
        minW="20"
        variant="outlineBlack"
        icon={<Icon name="Layout1" size="8" />}
        onClick={onOpen}
      />
      <TextInputModal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={d => console.log('submit', d)}
        textContent={{
          header: 'persona.modal.saveAsTemplateTitle',
          inputPlaceholder: 'persona.modal.saveAsTemplatePlaceholder',
          toast: 'persona.toast.saveAsTemplate',
        }}
      />
    </>
  );
};
