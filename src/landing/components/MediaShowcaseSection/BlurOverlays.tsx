import { Box, BoxProps } from '@chakra-ui/react';
import { FC } from 'react';

const baseProps: BoxProps = {
  pos: 'absolute',
  top: '0',
  w: '20vw',
  h: 'full',
  zIndex: 'docked',
};

export const BlurOverlays: FC = () => {
  return (
    <>
      <Box
        {...baseProps}
        right={{ base: '-5', md: '-20' }}
        bgGradient={
          'linear(to-r, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'
        }
      />
      <Box
        {...baseProps}
        left={{ base: '-5', md: '-20' }}
        bgGradient={
          'linear(to-l, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'
        }
      />
    </>
  );
};
