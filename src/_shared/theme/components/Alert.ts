import { ComponentStyleConfig } from '@chakra-ui/react';

export const Alert: ComponentStyleConfig = {
  defaultProps: {
    variant: 'left-accent',
  },
  variants: {
    'left-accent': {
      container: {
        outlineWidth: '3px',
        outlineColor: 'black.0',
        outlineStyle: 'solid',
        bg: 'white.bg',
        borderRadius: 'sm',
        boxShadow: 'noBlur.dark.m',
      },
    },
  },
};
