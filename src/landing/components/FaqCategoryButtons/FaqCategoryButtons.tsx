import { Box, HStack } from '@chakra-ui/react';
import { FC } from 'react';
import { FaqCategoryButton } from './FaqCategoryButton';

export const FaqCategoryButtons: FC = () => {
  return (
    <Box overflow={{ base: 'scroll', lg: 'hidden' }} w="full">
      <HStack
        justifyContent="space-around"
        mt="8"
        mx="auto"
        w={{ base: '3xl', md: '4xl' }}
      >
        <FaqCategoryButton cat="auth" />
        <FaqCategoryButton cat="builder" />
        <FaqCategoryButton cat="share" />
        <FaqCategoryButton cat="template" />
      </HStack>
    </Box>
  );
};
