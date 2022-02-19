import { outline } from './variants/outline';
import { solid } from './variants/solid';
import { link } from './variants/link';
import { unstyled } from './variants/unstyled';
import { baseStyle } from './baseStyle';
import { sizes } from './sizes';
import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  baseStyle,
  sizes,
  variants: {
    outline,
    solid,
    link,
    unstyled,
  },
  defaultProps: {
    variant: 'solid',
    size: 'lg',
  },
};
