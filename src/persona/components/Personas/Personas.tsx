import { useMemo } from 'react';
import { SkeletonPersonCardList } from '../../../_shared/components';
import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react';
import { usePersonas } from '../../hook/usePersonas';
import { useLoading } from '../../../_shared/store/loading';
import { PersonaCard } from '../PersonaCard';

const containerProps: SimpleGridProps = {
  spacingX: '7',
  spacingY: '10',
  minChildWidth: '350px',
  w: '100%',
  mt: '8',
};

export const Personas: React.FC = () => {
  const { personas } = usePersonas();
  const { isLoading } = useLoading('persona');

  const renderPersona = useMemo(() => {
    return isLoading ? (
      <SkeletonPersonCardList numberOfItems={10} />
    ) : (
      personas.map(persona => <PersonaCard key={persona.id} {...persona} />)
    );
  }, [isLoading, personas]);
  return <SimpleGrid {...containerProps}>{renderPersona}</SimpleGrid>;
};
