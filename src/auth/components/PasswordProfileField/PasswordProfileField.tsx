import { Box, Stack, Text } from '@chakra-ui/react';
import { PasswordInput } from '../../../_shared/components/PasswordInput';
import { ProfileInputWrapper } from '../ProfileInputWrapper';
import { usePasswordProfileField } from './usePasswordProfileField';

export const PasswordProfileField = () => {
  const { inputValue, onChange, labels, ...rest } = usePasswordProfileField();

  return (
    <Box w="full">
      <Text as="h2" textStyle="h2">
        Password
      </Text>
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
