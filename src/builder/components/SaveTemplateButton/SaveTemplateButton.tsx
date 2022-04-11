import { IconButton } from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';
import { useSaveTemplateButton } from './useSaveTemplateButton';

export const SaveTemplateButton: React.FC = () => {
  const { saveTemplate } = useSaveTemplateButton();

  return (
    <>
      <IconButton
        aria-label="save-template"
        h="10"
        minW="20"
        variant="outlineBlack"
        icon={<Icon name="Layout1" size="8" />}
        onClick={saveTemplate}
      />
    </>
  );
};
