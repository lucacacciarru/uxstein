import { IconButton } from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';
import { useSaveButton } from './useSaveButton';

export const SaveButton: React.FC = () => {
  const { savePersona } = useSaveButton();
  return (
    <IconButton
      aria-label="save"
      h="10"
      minW="20"
      variant="outline"
      icon={<Icon name="Save" size="8" />}
      onClick={savePersona}
    />
  );
};
