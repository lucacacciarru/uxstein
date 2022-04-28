import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react';
import { usePlaceholderGrid } from './usePlaceholderGrid';

export type PlaceholderGridProps = {
  columns: number;
  row: number;
} & SimpleGridProps;

export const PlaceholderGrid: React.FC<PlaceholderGridProps> = ({
  columns,
  row,
  ...rest
}) => {
  const { renderPlaceholderBlocks, opacityContainer } = usePlaceholderGrid(
    columns,
    row,
  );
  return (
    <SimpleGrid
      columns={columns}
      row={row}
      opacity={opacityContainer}
      transition="all .5s ease"
      {...rest}
    >
      {renderPlaceholderBlocks}
    </SimpleGrid>
  );
};
