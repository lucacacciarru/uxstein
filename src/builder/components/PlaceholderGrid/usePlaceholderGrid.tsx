import { Box } from '@chakra-ui/react';
import { useContext, useMemo } from 'react';
import { BuilderContext } from '../BuilderContext';
import { PlaceholderGridProps } from './PlaceholderGrid';

export const usePlaceholderGrid = ({
  columns,
  rows,
  columnGap,
  rowGap,
}: {
  columns: number;
  rows: number;
  columnGap?: PlaceholderGridProps['spacingX'];
  rowGap?: PlaceholderGridProps['spacingY'];
}) => {
  const numberOfBlocks = Array.from(Array(columns * rows).keys());
  const { showGridPlaceholder } = useContext(BuilderContext);

  const opacityContainer = useMemo(() => {
    return showGridPlaceholder ? '1' : '0';
  }, [showGridPlaceholder]);

  const showBorderX = useMemo(
    () => !columnGap || columnGap === '0px' || 0,
    [columnGap],
  );

  const showBorderY = useMemo(() => !rowGap || rowGap === '0px' || 0, [rowGap]);

  const renderPlaceholderBlocks = useMemo(
    () =>
      numberOfBlocks.map(block => (
        <Box
          key={block}
          background="brand.lightest"
          aria-hidden="true"
          w="full"
          h="full"
          borderX={showBorderX && '2px solid white'}
          borderY={showBorderY && '2px solid white'}
          data-testid="placeholder-grid-item"
        />
      )),
    [numberOfBlocks, showBorderX, showBorderY],
  );

  return {
    renderPlaceholderBlocks,
    opacityContainer,
  };
};
