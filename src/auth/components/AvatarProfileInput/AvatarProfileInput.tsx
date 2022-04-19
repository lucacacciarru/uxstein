import { Avatar, Box, HStack, Input, Heading } from '@chakra-ui/react';

export const AvatarProfileInput = () => {
  return (
    <Box>
      <Heading as="h2" size="h2" textAlign="center">
        Avatar
      </Heading>
      <HStack gap="4" mt="2">
        <Avatar size="xl" />
        <Input ml="4" borderRadius="none" variant="unstyled" type="file" />
      </HStack>
    </Box>
  );
};
