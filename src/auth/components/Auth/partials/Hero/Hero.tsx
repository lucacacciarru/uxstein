import { Stack, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Box as ChakraBox, type BoxProps } from '@chakra-ui/layout';
import { HeroImages } from '../HeroImages';
import { useTranslation } from 'react-i18next';

export const MotionBox = motion<BoxProps>(ChakraBox);

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Stack
      height={'100vh'}
      p={'16'}
      background="brand.lighter"
      as={'section'}
      width="50vw"
      gap={'6rem'}
    >
      <Heading
        dangerouslySetInnerHTML={{ __html: t('auth.hero.title') }}
        as="h2"
      />
      <HeroImages />
    </Stack>
  );
};
