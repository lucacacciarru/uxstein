import { ComponentStyleConfig } from '@chakra-ui/react';

export const Progress: ComponentStyleConfig = {
  defaultProps: {
    variant: 'outlined',
  },
  variants: {
    outlined: {
      track: {
        borderRadius: 'md',
        borderWidth: '3px',
        borderColor: 'black.0',
        bg: 'black.20',
      },
      filledTrack: {
        borderRightWidth: '1px',
        borderRadius: 'md',
        bg: 'brand.primary',
        borderColor: 'black.0',
      },
    },
  },
};
