import { Flex } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { FeaturesShowcasePanels } from './FeatureShowcasePanels';
import { MediaShowcase } from './MediaShowCase';

export const FeaturesShowcase: FC = () => {
  const [openedIndex, setOpenedIndex] = useState<0 | 1 | 2>(0);
  return (
    <Flex
      alignItems="center"
      gap="8"
      pt={{ base: '0.5', md: '10' }}
      flexDir={{ base: 'column-reverse', lg: 'row' }}
    >
      <FeaturesShowcasePanels setOpenedIndex={setOpenedIndex} />
      <MediaShowcase openedIndex={openedIndex} />
    </Flex>
  );
};
