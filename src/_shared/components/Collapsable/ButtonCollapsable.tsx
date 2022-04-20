import { AccordionButton, AccordionIcon, Box, Heading } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  name: string;
};

export const ButtonCollapsable: FC<Props> = ({ name }) => {
  return (
    <Heading as="h2" size="h2">
      <AccordionButton role="collapsable-button">
        <Box flex="1" textAlign="left">
          <AccordionIcon mr="2" color="brand.primary" />
          {name}
        </Box>
      </AccordionButton>
    </Heading>
  );
};
