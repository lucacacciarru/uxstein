import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { ImageFallback } from '../../../builder/components/ImageFallback/ImageFallback';

type Props = {
  src: string;
  title: string;
  description: string;
};

export const WorkflowTabPanel: FC<Props> = ({ src, title, description }) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      pt="8"
      flexDir={{ base: 'column-reverse', lg: 'row' }}
      gap="12"
    >
      <Box maxW={{ base: 'full', lg: '45%' }}>
        <Heading as="h3" textStyle="h3" mb="4">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Box>
      <Box
        maxW={{ base: 'full', lg: '40%' }}
        w="full"
        boxSize="full"
        border="dark.s"
        borderRadius="md"
        py="8"
        px="4"
        bg="brand.lighter"
      >
        <Image
          fallback={<ImageFallback />}
          boxSize="full"
          borderRadius="md"
          src={src}
          objectFit="contain"
        />
      </Box>
    </Flex>
  );
};
