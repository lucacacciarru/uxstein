import { HStack } from '@chakra-ui/react';
import { SavePersonaButton } from '../SavePersonaButton';
import { SaveTemplateButton } from '../SaveTemplateButton';
import { SavePersonaAsTemplateButton } from '../SavePersonaAsTemplateButton';
import { useUrlBuilderEntity } from '../../hooks/useUrlBuilderEntity';
import { ExportButton } from '../ExportButton';

type Props = {
  exportItemRef: React.RefObject<HTMLElement>;
};

export const HeaderButtons: React.FC<Props> = ({ exportItemRef }) => {
  const { entityType } = useUrlBuilderEntity();

  const isPersonaRoute = entityType === 'persona';
  const isTemplateRoute = entityType === 'template';

  return (
    <HStack spacing="6">
      {isPersonaRoute && (
        <>
          <SavePersonaButton />
          <SavePersonaAsTemplateButton />
          <ExportButton exportItemRef={exportItemRef} />
        </>
      )}
      {isTemplateRoute && <SaveTemplateButton />}
    </HStack>
  );
};
