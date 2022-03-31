import { Stack } from '@chakra-ui/react';
import { TemplateRow } from '../TemplateRow';

export const Templates: React.FC = () => {
  return (
    <Stack gap="4" width="100%">
      <TemplateRow category="mine" />
      <TemplateRow category="default" />
    </Stack>
  );
};
