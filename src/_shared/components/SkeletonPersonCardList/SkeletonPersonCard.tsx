import { Skeleton, Stack } from '@chakra-ui/react';

export const SkeletonPersonCard: React.FC = () => {
  return (
    <Stack w={'350px'} h="29vh" border="dark.s">
      <Skeleton h="20vh" w="full" />
      <Stack py="4" px="4" alignItems="center">
        <Skeleton w="100%" h="10px" />
        <Skeleton w="100%" h="10px" />
      </Stack>
    </Stack>
  );
};
