import { Box, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Personas } from '../components';

export const MyPersona: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box px="12" py="6" w="100%">
      <Heading as="h1" size="h1">
        {t('persona.container.title')}
      </Heading>
      <Personas />
    </Box>
  );
};
