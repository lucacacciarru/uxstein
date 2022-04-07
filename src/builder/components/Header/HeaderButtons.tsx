import { HStack, IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '../../../_shared/components';
import { SavePersonaButton } from '../SavePersonaButton';

export const HeaderButtons: FC = () => {
  return (
    <HStack spacing="6">
      <SavePersonaButton />
      <IconButton
        aria-label="save-template"
        h="10"
        minW="20"
        variant="outlineBlack"
        icon={<Icon name="Layout1" size="8" />}
      />
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
