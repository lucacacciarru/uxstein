import { Box, Stack, Text } from '@chakra-ui/react';
import { EmailProfileInput } from '../components/EmailProfileInput';
import { PasswordProfileField } from '../components/PasswordProfileField';
import { UsernameProfileInput } from '../components/UsernameProfileInput';
import { AvatarProfileInput } from '../components/AvatarProfileInput';

export const Profile = () => {
  return (
    <Stack w="full" alignItems="center">
      <Box w="full" textAlign="center">
        <Text as="h1" textStyle="h1">
          Menage your profile
        </Text>
        <Text textStyle="p">
          Change your profile information and subscription.
        </Text>
      </Box>
      <Stack gap="6" w="xl" py="10" alignItems="center">
        <AvatarProfileInput />
        <EmailProfileInput />
        <UsernameProfileInput />
        <PasswordProfileField />
      </Stack>
    </Stack>
  );
};
