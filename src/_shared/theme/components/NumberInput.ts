import { ComponentStyleConfig } from '@chakra-ui/react';

export const NumberInput: ComponentStyleConfig = {
  defaultProps: {
    variant: 'outlined',
  },
  variants: {
    outlined: {
      field: {
        borderWidth: '3px',
        borderColor: 'black.0',
      },
      stepperGroup: {
        borderLeftWidth: '1px',
        borderColor: 'black.0',
      },
      stepper: {
        borderWidth: '1px',
        borderColor: 'black.0',
      },
    },
  },
};
