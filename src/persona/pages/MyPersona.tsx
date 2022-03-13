import { Box, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Personas } from '../components';
import { usePersonas } from '../hook/usePersonas';

export const MyPersona: React.FC = () => {
  const { fetchPersonaList } = usePersonas();

  useEffect(() => {
    fetchPersonaList();
    // TODO: move this call in an after login saga
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { t } = useTranslation();
  return (
    <Box px="12" py="6" w="100%">
      <Text as="h1" textStyle="h1">
        {t('persona.container.title')}
      </Text>
      <Personas />
    </Box>
  );
};
