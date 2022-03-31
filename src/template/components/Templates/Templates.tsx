import { Stack } from '@chakra-ui/react';
import { TemplateRow } from '../TemplateRow';
import { useTemplates } from './useTemplates';

export const Templates: React.FC = () => {
  useTemplates();
  return (
    <Stack gap="4" width="100%">
      <TemplateRow category="mine" />
      <TemplateRow category="default" />
    </Stack>
  );
};
