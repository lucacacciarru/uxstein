import { useMemo } from 'react';
import { SkeletonPersonCardList } from '../../../_shared/components';
import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react';
import { usePersonas } from '../../hook/usePersonas';
import { useLoading } from '../../../_shared/store/loading';
import { PersonaCard } from '../PersonaCard';
import { LoadingKeys } from '../../../_shared/store/loading/types';
import { NewEntityFloatingActionButton } from '../../../builder/components/NewEntityFloatingActionButton';
import { PATHS } from '../../../_shared/types/paths';

const containerProps: SimpleGridProps = {
  spacingX: '7',
  spacingY: '10',
  minChildWidth: '350px',
  w: '100%',
  mt: '8',
};

export const Personas: React.FC = () => {
  const { personas } = usePersonas();
  const { isLoading } = useLoading(LoadingKeys.persona);

  const renderPersona = useMemo(() => {
    return isLoading ? (
      <SkeletonPersonCardList numberOfItems={10} />
    ) : (
      personas.map(persona => <PersonaCard key={persona.id} {...persona} />)
    );
  }, [isLoading, personas]);
  return (
    <SimpleGrid {...containerProps}>
      {renderPersona}
      <NewEntityFloatingActionButton destinationPath={PATHS.CREATE_ENTITY}/>
    </SimpleGrid>
  );
};
