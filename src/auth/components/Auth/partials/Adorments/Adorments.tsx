import { useMemo } from 'react';
import { adormentList } from './adormentList';
import {
  Tooltip,
  Image,
  Box as ChakraBox,
  type BoxProps,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
export const MotionBox = motion<BoxProps>(ChakraBox);

export const Adorments = () => {
  const renderAdorments = useMemo(
    () =>
      adormentList.map(adorment => (
        <Tooltip key={adorment.imageProp.src} {...adorment.tooltipsProp}>
          <MotionBox {...adorment.boxProp} position={'absolute'}>
            <Image
              {...adorment.imageProp}
              w="100%"
              h={'100%'}
              objectFit="contain"
            />
          </MotionBox>
        </Tooltip>
      )),
    [],
  );
  return <>{renderAdorments}</>;
};
