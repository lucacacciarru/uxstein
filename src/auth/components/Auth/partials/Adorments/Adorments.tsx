import { useMemo } from 'react';
import {
  Tooltip,
  Image,
  Box as ChakraBox,
  type BoxProps,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Adorment } from './types';
import { useTranslation } from 'react-i18next';

export const MotionBox = motion<BoxProps>(ChakraBox);

type Props = {
  items: Adorment[];
};

export const Adorments: React.FC<Props> = ({ items }) => {
  const { t } = useTranslation();
  const renderAdorments = useMemo(
    () =>
      items.map((adorment, i) => (
        <Tooltip
          data-testid={`tooltip${i}`}
          key={adorment.imageProp.src}
          label={t(adorment.tooltipsProp.label)}
          placement={adorment.tooltipsProp.placement}
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
    [items, t],
  );
  return <>{renderAdorments}</>;
};
