import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Heading,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Icon, IconComponentModel } from '../../../_shared/components';

type Props = {
  i: 0 | 1 | 2;
  description: string;
  title: string;
  setOpenedIndex: React.Dispatch<React.SetStateAction<0 | 1 | 2>>;
  icon: keyof IconComponentModel;
};

export const FeatureShowcasePanelContent: FC<Props> = ({
  description,
  title,
  icon,
  setOpenedIndex,
  i,
}) => {
  return (
    <AccordionItem>
      <AccordionButton
        gap="4"
        onClick={() => setOpenedIndex(i)}
        data-testid={`panel-button-${i}`}
      >
        <Icon name={icon} size="10" color="brand.primary" />
        <Heading as="h4" size="h4">
          {title}
        </Heading>
      </AccordionButton>
      <AccordionPanel>{description}</AccordionPanel>
    </AccordionItem>
  );
};
