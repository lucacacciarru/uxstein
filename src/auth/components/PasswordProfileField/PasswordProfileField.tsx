import { Box, Stack, Heading } from '@chakra-ui/react';
import { PasswordInput } from '../../../_shared/components/PasswordInput';
import { ProfileInputWrapper } from '../ProfileInputWrapper';
import { usePasswordProfileField } from './usePasswordProfileField';

export const PasswordProfileField = () => {
  const { inputValue, onChange, labels, ...rest } = usePasswordProfileField();

  return (
    <Box w="full">
      <Heading as="h2" size="h2">
        Password
      </Heading>
      <ProfileInputWrapper {...rest}>
        <Stack gap="3" mt="3">
          <PasswordInput
            label={labels.oldPassword}
            name="oldPassword"
            value={inputValue.oldPassword}
            onChange={onChange}
          />
          <PasswordInput
            label={labels.newPassword}
            name="newPassword"
            value={inputValue.newPassword}
            onChange={onChange}
          />
        </Stack>
      </ProfileInputWrapper>
    </Box>
  );
};
