import { HStack, IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '../../../_shared/components';
import { SaveButton } from '../SaveButton';

export const HeaderButtons: FC = () => {
  return (
    <HStack spacing="6">
      <SaveButton />
      <IconButton
        aria-label="save-layout"
        h="10"
        minW="20"
        variant="outline"
        icon={<Icon name="Layout1" size="8" />}
      />
      <IconButton
        aria-label="download"
        h="10"
        minW="20"
        variant="outline"
        icon={<Icon name="Download" size="8" />}
      />
    </HStack>
  );
};
