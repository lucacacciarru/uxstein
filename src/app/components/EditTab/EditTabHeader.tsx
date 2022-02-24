import { Box, HStack, Text } from '@chakra-ui/react';
import { FC } from 'react';
type Size = { b: number; h: number };

type Props = {
  title: string;
  minSize: Size;
  maxSize: Size;
};

export const EditTabHeader: FC<Props> = ({ title, minSize, maxSize }) => {
  return (
    <Box as={'header'} pl="4" mb="8" mt="4">
      <Text fontSize="4xl">{title}</Text>
      <HStack spacing="8">
        <p>
          Min-size: {minSize.b} x {minSize.h}
        </p>
        <p>
          Max-size: {maxSize.b} x {maxSize.h}
        </p>
      </HStack>
    </Box>
  );
};
