import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Personas } from '../components';

export const MyPersona: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box px="12" py="6" w="100%">
      <h1>{t('persona.container.title')}</h1>
      <Personas />
    </Box>
  );
};
