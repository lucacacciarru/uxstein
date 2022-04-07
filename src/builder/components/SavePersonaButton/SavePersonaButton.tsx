import { IconButton } from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';
import { useSavePersonaButton } from './useSavePersonaButton';

export const SavePersonaButton: React.FC = () => {
  const { savePersona } = useSavePersonaButton();
  return (
    <IconButton
      aria-label="save"
      h="10"
      minW="20"
      variant="outlineBlack"
      icon={<Icon name="Save" size="8" />}
      onClick={savePersona}
    />
  );
};
