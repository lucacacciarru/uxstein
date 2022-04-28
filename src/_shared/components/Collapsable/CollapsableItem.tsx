import {
  AccordionItem,
  AccordionPanel,
  AccordionPanelProps,
} from '@chakra-ui/react';
import { FC } from 'react';
import { ButtonCollapsable } from './ButtonCollapsable';

type Props = {
  name: string;
  nested?: boolean;
  accordtionPanelProps?: AccordionPanelProps;
};

export const CollapsableItem: FC<Props> = ({
  name,
  children,
  nested,
  accordtionPanelProps,
}) => {
  return (
    <AccordionItem _last={nested ? { borderBottom: 'none' } : undefined}>
      <ButtonCollapsable name={name} />

      <AccordionPanel
        pb="4"
        data-testid="collapsable-content"
        {...accordtionPanelProps}
      >
        {children}
      </AccordionPanel>
    </AccordionItem>
  );
};
