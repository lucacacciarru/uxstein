import { ComponentStyleConfig } from '@chakra-ui/react';

export const Slider: ComponentStyleConfig = {
  defaultProps: {
    variant: 'outlined',
  },

  variants: {
    outlined: {
      thumb: {
        borderColor: 'black.0',
        borderWidth: '3px',
        bg: 'brand.primary',
        _active: {
          shadow: 'none',
        },
        _focus: {
          shadow: 'none',
        },
      },
      filledTrack: {
        borderColor: 'black.0',
        borderWidth: '1.5px',
        bg: 'brand.primary',
      },
    },
  },
};
