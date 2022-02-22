import { HStack } from '@chakra-ui/react';
import { Hero } from '..';

export const TemplateForm: React.FC = ({ children }) => {
  return (
    <HStack>
      <Hero />
      {children}
    </HStack>
  );
};
