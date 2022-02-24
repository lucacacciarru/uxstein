import { Accordion, AccordionProps } from '@chakra-ui/react';
import { FC } from 'react';

export const Collapsable: FC<AccordionProps> = ({ children, ...props }) => {
  return (
    <Accordion allowMultiple allowToggle {...props}>
      {children}
    </Accordion>
  );
};
