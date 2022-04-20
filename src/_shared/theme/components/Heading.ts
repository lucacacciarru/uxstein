import { ComponentStyleConfig } from '@chakra-ui/react';
import { textStyles } from '../style';

export const Heading: ComponentStyleConfig = {
  defaultProps: {
    size: 'h2',
  },
  sizes: {
    ...textStyles,
  },
};
