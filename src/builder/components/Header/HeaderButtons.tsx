import { HStack, IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '../../../_shared/components';

export const HeaderButtons: FC = () => {
  return (
    <HStack spacing="4">
      <IconButton
        aria-label="save"
        size="icon-lg"
        variant="outline"
        icon={<Icon name="Save" size="8" />}
      />
      <IconButton
        aria-label="save-layout"
        size="icon-lg"
        variant="outline"
        icon={<Icon name="Layout1" size="8" />}
      />
      <IconButton
        aria-label="download"
        size="icon-lg"
        variant="outline"
        icon={<Icon name="Download" size="8" />}
      />
    </HStack>
  );
};
