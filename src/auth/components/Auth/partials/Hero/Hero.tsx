import { Stack, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Box as ChakraBox, type BoxProps } from '@chakra-ui/layout';
import { HeroImages } from '../HeroImages';

export const MotionBox = motion<BoxProps>(ChakraBox);

export const Hero: React.FC = () => {
  return (
    <Stack
      height={'100vh'}
      p={'16'}
      background="brand.lighter"
      as={'section'}
      width="50vw"
      gap={'6rem'}
    >
      <Heading as="h2">
        Create a User Person in few seconds,
        <br />
        Frankestein will be proud of you
      </Heading>
      <HeroImages />
    </Stack>
  );
};
