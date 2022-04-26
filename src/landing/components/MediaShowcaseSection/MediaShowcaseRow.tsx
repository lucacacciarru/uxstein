import { FC, useMemo } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { Box, HStack, Image } from '@chakra-ui/react';
import { ImageFallback } from '../../../builder/components/ImageFallback/ImageFallback';
import { BlurOverlays } from './BlurOverlays';

type Props = {
  srcList: string[];
} & HTMLMotionProps<'div'>;

export const MediaShowcaseRow: FC<Props> = ({ srcList, ...rest }) => {
  const renderedImages = useMemo(
    () =>
      srcList.map((src, i) => (
        <Image src={src} h="full" fallback={<ImageFallback />} key={i} />
      )),
    [srcList],
  );
  return (
    <Box pos="relative">
      <BlurOverlays />
      <motion.div
        transition={{
          x: {
            duration: 7,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          },
        }}
        {...rest}
      >
        <HStack gap="1vw" h="32">
          {renderedImages}
        </HStack>
      </motion.div>
    </Box>
  );
};
