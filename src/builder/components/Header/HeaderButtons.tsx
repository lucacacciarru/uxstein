import { HStack, IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '../../../_shared/components';
import { SaveButton } from '../SaveButton';
import { SaveAsTemplateButton } from '../SaveAsTemplateButton';

export const HeaderButtons: FC = () => {
  return (
    <HStack spacing="6">
      <SaveButton />
      <SaveAsTemplateButton />
      <IconButton
        aria-label="download"
        h="10"
        minW="20"
        variant="outlineBlack"
        icon={<Icon name="Download" size="8" />}
      />
    </HStack>
  );
};
