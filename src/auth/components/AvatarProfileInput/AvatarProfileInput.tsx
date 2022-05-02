import { Avatar, Box, HStack, Heading, Button } from '@chakra-ui/react';
import { UploadImageModal } from '../../../_shared/components/UploadImageModal';
import { useAvatarProfileInput } from './useAvatarProfileInput';

export const AvatarProfileInput = () => {
  const { onOpen, avatar, username, labelButton, ...rest } =
    useAvatarProfileInput();
  return (
    <>
      <Box>
        <Heading as="h2" size="h2" textAlign="center">
          Avatar
        </Heading>
        <HStack gap="6" position="relative" mt="4">
          <Avatar src={avatar} name={username} size="xl" />
          <Button onClick={onOpen} size="md">
            {labelButton}
          </Button>
        </HStack>
      </Box>
      <UploadImageModal {...rest} />
    </>
  );
};
