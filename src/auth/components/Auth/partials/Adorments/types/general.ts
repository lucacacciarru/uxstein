import { type BoxProps } from '@chakra-ui/layout';
import { HTMLMotionProps } from 'framer-motion';

export type MotionChakraBox = BoxProps & HTMLMotionProps<'div'>;

export type AdormentList = {
  imageProp: {
    src: string;
  };
  tooltipsProp: {
    placement: 'left' | 'right';
    label: string;
  };
  boxProp: MotionChakraBox;
};
