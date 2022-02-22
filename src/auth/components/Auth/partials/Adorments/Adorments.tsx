import { useMemo } from 'react';
import {
  Tooltip,
  Image,
  Box as ChakraBox,
  type BoxProps,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Adorment } from './types';
export const MotionBox = motion<BoxProps>(ChakraBox);

type Props = {
  items: Adorment[];
};

export const Adorments: React.FC<Props> = ({ items }) => {
  const renderAdorments = useMemo(
    () =>
      items.map((adorment, i) => (
        <Tooltip
          data-testid={`tooltip${i}`}
          key={adorment.imageProp.src}
          {...adorment.tooltipsProp}
        >
          <MotionBox
            role="adorment"
            {...adorment.boxProp}
            position={'absolute'}
          >
            <Image
              {...adorment.imageProp}
              w="100%"
              h={'100%'}
              objectFit="contain"
            />
          </MotionBox>
        </Tooltip>
      )),
    [items],
  );
  return <>{renderAdorments}</>;
};
