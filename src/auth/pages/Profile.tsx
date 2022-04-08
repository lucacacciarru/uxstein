import { Box, Stack, Text } from '@chakra-ui/react';
import { ProfileForm } from '../components';

export const Profile = () => {
  return (
    <Stack w="full" alignItems="center">
      <Box w="full" textAlign="center">
        <Text as="h1" textStyle="h1">
          Handle your profile
        </Text>
        <Text textStyle="p">
          Change your profile information and subscription.
        </Text>
      </Box>
      <ProfileForm />
    </Stack>
  );
};
