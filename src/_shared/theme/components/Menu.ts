//Todo: Complete
import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Menu: ComponentStyleConfig = {
  baseStyle: {
    list: {
      border: 'dark.s',
      padding: '0',
      borderRadius: 'sm',
    },
    item: {
      transition: 'all .5s ease-out',
      borderBottom: 'dark.s',
      ':last-of-type': {
        borderBottom: 'none',
      },
      _hover: {
        bg: 'brand.primary',
        color: 'white.pure',
      },
    },
  },
};
