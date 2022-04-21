import { HStack } from '@chakra-ui/react';
import { SavePersonaButton } from '../SavePersonaButton';
import { SaveTemplateButton } from '../SaveTemplateButton';
import { SavePersonaAsTemplateButton } from '../SavePersonaAsTemplateButton';
import { useUrlBuilderEntity } from '../../hooks/useUrlBuilderEntity';
import { ExportButton } from '../ExportButton';

export const HeaderButtons: React.FC = () => {
  const { entityType } = useUrlBuilderEntity();

  const isPersonaRoute = entityType === 'persona';
  const isTemplateRoute = entityType === 'template';

  return (
    <HStack spacing="6">
      {isPersonaRoute && (
        <>
          <SavePersonaButton />
          <SavePersonaAsTemplateButton />
          <ExportButton />
        </>
      )}
      {isTemplateRoute && <SaveTemplateButton />}
    </HStack>
  );
};
