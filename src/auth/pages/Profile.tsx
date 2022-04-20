import { Box, Stack, Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { ProfileForm } from '../components';

export const Profile = () => {
  const { t } = useTranslation();
  return (
    <Stack w="full" alignItems="center">
      <Box w="full" textAlign="center">
        <Heading as="h1" size="h1">
          {t('auth.profile.page.title')}
        </Heading>
        <Text textStyle="p">{t('auth.profile.page.subtitle')}</Text>
      </Box>
      <ProfileForm />
    </Stack>
  );
};
