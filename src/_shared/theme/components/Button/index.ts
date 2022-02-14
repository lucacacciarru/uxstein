import { outline } from './outline';
import { solid } from './solid';
import { baseStyle } from './baseStyle';
import { sizes } from './sizes';
import { link } from './link';
import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  baseStyle,
  sizes,
  variants: {
    outline,
    solid,
    link,
  },
  defaultProps: {
    variant: 'solid',
    size: 'lg',
  },
};
