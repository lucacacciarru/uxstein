// TODO: verificare se é possibile esporre le varianti al componente chakra
import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Text: ComponentStyleConfig = {
  defaultProps: {
    variant: 'body-M-regular',
  },
  variants: {
    'body-L': {
      fontSize: '1.25rem',
      fontWeight: 'regular',
    },
    'body-M': {
      fontSize: '1.125rem',
      fontWeight: 'light',
    },
    'body-M-regular': {
      fontSize: '1.125rem',
      fontWeight: 'regular',
    },
    'body-S': {
      fontSize: '1rem',
      fontWeight: 'light',
    },
    'body-S-regular': {
      fontSize: '1rem',
      fontWeight: 'regular',
    },
  },
};
