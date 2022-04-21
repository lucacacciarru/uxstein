import { ComponentStyleConfig } from '@chakra-ui/react';

export const Select: ComponentStyleConfig = {
  defaultProps: {
    variant: 'outlined',
  },
  variants: {
    outlined: {
      field: {
        borderWidth: '3px',
        borderColor: 'black.0',
        borderRadius: 'sm',
      },
    },
  },
};
