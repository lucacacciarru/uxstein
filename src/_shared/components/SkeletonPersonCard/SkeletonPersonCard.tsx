import { Box, Skeleton, SkeletonText } from '@chakra-ui/react';

export const SkeletonPersonCard: React.FC = () => {
  return (
    <Box w={'350px'} h="29vh" border="dark.s">
      <Skeleton h="20vh" w="full" borderBottom={'dark.s'} />
      <SkeletonText px="8" noOfLines={2} w="100%" mt="6" spacing={'4'} />
    </Box>
  );
};
