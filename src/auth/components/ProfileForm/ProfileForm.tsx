import { Stack } from '@chakra-ui/react';
import { AvatarProfileInput } from '../AvatarProfileInput';
import { EmailProfileInput } from '../EmailProfileInput';
import { PasswordProfileField } from '../PasswordProfileField';
import { UsernameProfileInput } from '../UsernameProfileInput';

export const ProfileForm: React.FC = () => {
  return (
    <Stack gap="6" w="xl" py="10" alignItems="center">
      <AvatarProfileInput />
      <EmailProfileInput />
      <UsernameProfileInput />
      <PasswordProfileField />
    </Stack>
  );
};
