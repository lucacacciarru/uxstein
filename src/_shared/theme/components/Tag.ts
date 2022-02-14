import { ComponentStyleConfig } from '@chakra-ui/react';

export const Tag: ComponentStyleConfig = {
  defaultProps: {
    variant: 'outline',
  },
  variants: {
    outline: {
      container: {
        bg: 'none',
        boxShadow: 'none',
        borderRadius: 'none',
        borderWidth: '3px',
        borderColor: 'black.0',
        color: 'black.0',
        transition: 'all .2s ease',
        p: '0.3rem 1rem',

        _hover: {
          boxShadow: 'noBlur.dark.s',
        },
      },
      closeButton: {
        color: 'black.80',
        opacity: '1',
        _hover: {
          opacity: '1',
          color: 'black.0',
        },
      },
    },
  },
};
