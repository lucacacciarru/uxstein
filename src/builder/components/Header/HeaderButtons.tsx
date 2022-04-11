import { FC } from 'react';
import { HStack, IconButton } from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';
import { SavePersonaButton } from '../SavePersonaButton';
import { SaveTemplateButton } from '../SaveTemplateButton';
import { SavePersonaAsTemplateButton } from '../SavePersonaAsTemplateButton';
import { useBuilderEntity } from '../../hooks/useBuilderEntity';

export const HeaderButtons: FC = () => {
  const { entityType } = useBuilderEntity();

  const isPersonaRoute = entityType === 'persona';
  const isTemplateRoute = entityType === 'template';

  return (
    <HStack spacing="6">
      {isPersonaRoute && (
        <>
          <SavePersonaButton />
          <SavePersonaAsTemplateButton />
          <IconButton
            aria-label="download"
            h="10"
            minW="20"
            variant="outlineBlack"
            icon={<Icon name="Download" size="8" />}
          />
        </>
      )}
      {isTemplateRoute && <SaveTemplateButton />}
    </HStack>
  );
};
