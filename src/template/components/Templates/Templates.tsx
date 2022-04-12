import { Stack } from '@chakra-ui/react';
import { TemplateRow } from '../TemplateRow';
import { NewEntityFloatingActionButton } from '../../../builder/components/NewEntityFloatingActionButton';
import { PATHS } from '../../../_shared/types/paths';

export const Templates: React.FC = () => {
  return (
    <Stack gap='4' width='100%'>
      <TemplateRow category='mine' />
      <TemplateRow category='default' />
      <NewEntityFloatingActionButton destinationPath={PATHS.CREATE_ENTITY}/>
    </Stack>
  );
};
