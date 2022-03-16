import { useMemo } from 'react';
import {
  PersonCard,
  SkeletonPersonCardList,
} from '../../../_shared/components';
import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react';
import { usePersonas } from '../../hook/usePersonas';
import { useLoading } from '../../../_shared/store/loading';

const containerProps: SimpleGridProps = {
  spacingX: '7',
  spacingY: '10',
  minChildWidth: '350px',
  columns: 4,
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
      personas.map(persona => (
        <PersonCard type="persona" key={persona.id} {...persona} />
      ))
    );
  }, [isLoading, personas]);
  return <SimpleGrid {...containerProps}>{renderPersona}</SimpleGrid>;
};
