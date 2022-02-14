import { ComponentStyleConfig } from '@chakra-ui/react';

export const Badge: ComponentStyleConfig = {
  baseStyle: {
    border: '2px solid black',
    borderColor: 'black.50',
    bg: 'black.20',
  },
  variants: {
    solid: {
      bg: 'brand.primary',
      borderColor: 'black.0',
      borderWidth: '2px',
    },
    outline: {
      borderColor: 'black.0',
      borderWidth: '2px',
      bg: '',
      color: 'black.0',
      outline: '',
    },
  },
};
