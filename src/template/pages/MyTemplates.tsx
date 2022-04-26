import { Box, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Templates } from '../components/Templates';

export const MyTemplates: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box px="12" py="6" w="100%">
      <Heading as="h1" size="h1">
        {t('template.container.title')}
      </Heading>
      <Templates />
    </Box>
  );
};
