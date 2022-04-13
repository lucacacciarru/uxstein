import { Avatar, Box, HStack, Input, Text } from '@chakra-ui/react';

export const AvatarProfileInput = () => {
  return (
    <Box>
      <Text as="h2" textStyle="h2" textAlign="center">
        Avatar
      </Text>
      <HStack gap="4" mt="2">
        <Avatar size="xl" />
        <Input ml="4" borderRadius="none" variant="unstyled" type="file" />
      </HStack>
    </Box>
  );
};
