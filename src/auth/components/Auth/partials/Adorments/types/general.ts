import { type BoxProps } from '@chakra-ui/layout';
import { HTMLMotionProps } from 'framer-motion';
import { TranslationKey } from '../../../../../../_shared/types/i18n';

export type MotionChakraBox = BoxProps & HTMLMotionProps<'div'>;

export type Adorment = {
  imageProp: {
    src: string;
  };
  tooltipsProp: {
    placement: 'left' | 'right';
    label: TranslationKey;
  };
  boxProp: MotionChakraBox;
};
