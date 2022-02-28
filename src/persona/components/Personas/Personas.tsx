import { useMemo } from 'react';
import { PersonCard } from '../../../_shared/components';
import { mockPersonas } from '../../utils/mockPerson';
import { SimpleGrid, SimpleGridProps, Spacer } from '@chakra-ui/react';

const containerProps: SimpleGridProps = {
  spacingX: '7',
  spacingY: '10',
  columns: 4,
  w: '100%',
  mt: '8',
};

export const Personas: React.FC = () => {
  const renderPersona = useMemo(() => {
    return mockPersonas.map(persona => (
      <PersonCard key={persona.createdAt} {...persona} />
    ));
  }, []);
  return (
    <SimpleGrid {...containerProps}>
      {renderPersona}
      <Spacer />
    </SimpleGrid>
  );
};
