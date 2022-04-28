import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './style.css';
import { useMemo } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import { ComponentMap } from '../ComponentMap/ComponentMap';
import { useDroppablePage } from './useDroppablePage';
import { BlockSetup } from '../../hooks/useBlockSetup';
import { useSelectedBlock } from '../../hooks/useSelectedBlock';
import { Box, HStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { BuilderContext } from '../BuilderContext';
import { PlaceholderGrid } from '../PlaceholderGrid';

const ReactGridLayout = WidthProvider(RGL);

type Props = {
  blockSetup: BlockSetup;
};

export const DroppablePage: React.FC<Props> = ({ blockSetup }) => {
  const { layout, gridLayoutProps, backgroundContainer, placeholderGridProps } =
    useDroppablePage(blockSetup);
  const { selectBlock } = useSelectedBlock();
  const { exportItemRef } = useContext(BuilderContext);

  const renderMapItem = useMemo(
    () =>
      layout.map(item => (
        <Box
          zIndex="docked"
          data-grid={item}
          key={item.i}
          onClick={() => {
            selectBlock(item.i);
          }}
        >
          <ComponentMap id={item.i} />
        </Box>
      )),
    [layout, selectBlock],
  );

  return (
    <HStack alignItems="center" justifyContent="center">
      <Box
        id="test"
        ref={exportItemRef as React.LegacyRef<HTMLDivElement>}
        w="70vw"
        border="dark.s"
        position="relative"
        h="800px"
        background={backgroundContainer}
      >
        <ReactGridLayout {...gridLayoutProps}>{renderMapItem}</ReactGridLayout>
        <PlaceholderGrid {...placeholderGridProps} />
      </Box>
    </HStack>
  );
};
