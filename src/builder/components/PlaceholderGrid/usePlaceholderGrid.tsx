import { Box } from '@chakra-ui/react';
import { useContext, useMemo } from 'react';
import { BuilderContext } from '../BuilderContext';

export const usePlaceholderGrid = (columns: number, row: number) => {
  const numberOfBlocks = Array.from(Array(columns * row).keys());
  const { showGridPlaceholder } = useContext(BuilderContext);

  const opacityContainer = useMemo(() => {
    return showGridPlaceholder ? '1' : '0';
  }, [showGridPlaceholder]);

  const renderPlaceholderBlocks = useMemo(
    () =>
      numberOfBlocks.map(block => (
        <Box key={block} background="brand.lightest" w="full" h="full" />
      )),
    [numberOfBlocks],
  );

  return {
    renderPlaceholderBlocks,
    opacityContainer,
  };
};
