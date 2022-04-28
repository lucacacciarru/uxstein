import { SimpleGrid } from '@chakra-ui/react';
import { SectionWrapper } from '../SectionWrapper';
import { useExampleSection } from './useExampleSection';

export const ExampleSection: React.FC = () => {
  const { renderExampleCards } = useExampleSection();
  return (
    <SectionWrapper>
      <SimpleGrid
        columns={{ xl: 3, lg: 2, md: 2, sm: 1 }}
        spacingX="32"
        spacingY="24"
      >
        {renderExampleCards}
      </SimpleGrid>
    </SectionWrapper>
  );
};
