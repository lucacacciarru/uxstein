import { useMemo } from 'react';
import { PersonCard } from '../../../_shared/components';
import { SimpleGrid, SimpleGridProps, Spacer } from '@chakra-ui/react';
import { usePersona } from '../../hook/usePersona';

const containerProps: SimpleGridProps = {
  spacingX: '7',
  spacingY: '10',
  columns: 4,
  w: '100%',
  mt: '8',
};

export const Personas: React.FC = () => {
  const { personas } = usePersona();
  const renderPersona = useMemo(() => {
    return personas
      ? personas.map(persona => (
          <PersonCard type="persona" key={persona.id} {...persona} />
        ))
      : null;
  }, [personas]);
  return (
    <SimpleGrid {...containerProps}>
      {renderPersona}
      <Spacer />
    </SimpleGrid>
  );
};
