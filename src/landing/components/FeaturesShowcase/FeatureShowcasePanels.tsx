import { Accordion, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { FeatureShowcasePanelContent } from './FeatureShowcasePanelContent';
import { useFeatureShowcasePanel } from './useFeatureShowcasePanels';

type Props = {
  setOpenedIndex: React.Dispatch<React.SetStateAction<0 | 1 | 2>>;
};

export const FeaturesShowcasePanels: FC<Props> = ({ setOpenedIndex }) => {
  const { featureOneTexts, featureTwoTexts, featureThreeTexts } =
    useFeatureShowcasePanel();
  return (
    <Stack w={{ base: '90%', lg: '70%' }} zIndex="docked" maxW="2xl">
      <Accordion variant="greenHover" defaultIndex={0}>
        <FeatureShowcasePanelContent
          {...featureOneTexts}
          i={0}
          setOpenedIndex={setOpenedIndex}
          icon="Layout1"
        />
        <FeatureShowcasePanelContent
          {...featureTwoTexts}
          i={1}
          setOpenedIndex={setOpenedIndex}
          icon="Layout12"
        />
        <FeatureShowcasePanelContent
          {...featureThreeTexts}
          i={2}
          setOpenedIndex={setOpenedIndex}
          icon="Layout3"
        />
      </Accordion>
    </Stack>
  );
};
