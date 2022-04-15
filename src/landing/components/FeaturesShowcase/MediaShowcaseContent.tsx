import { Fade, Image, ImageProps } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { ImageFallback } from '../../../builder/components/ImageFallback/ImageFallback';

type Props = {
  i: number;
  openedIndex: number;
  src: string;
};

export const MediaShowCaseContent: FC<Props> = ({ openedIndex, i, src }) => {
  const positioningProps: ImageProps = useMemo(() => {
    if (i !== 0) {
      return {
        pos: 'absolute',
        top: '0',
        left: '0',
      };
    }
    return {};
  }, [i]);

  return (
    <Fade in={openedIndex === i}>
      <Image
        src={src}
        fallback={<ImageFallback />}
        border="dark.s"
        borderRadius="md"
        objectFit="contain"
        w="full"
        maxH="lg"
        {...positioningProps}
      />
    </Fade>
  );
};
