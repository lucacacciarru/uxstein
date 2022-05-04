import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './style.css';
import { useMemo } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import { ComponentMap } from '../ComponentMap/ComponentMap';
import { useDroppablePage } from './useDroppablePage';
import { BlockSetup } from '../../hooks/useBlockSetup';
import { Box, HStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { BuilderContext } from '../BuilderContext';
import { PlaceholderGrid } from '../PlaceholderGrid';
import { gridSettings } from '../../config/styleSettings/globals';
import { useSelectedBlock } from '../../hooks/useSelectedBlock';

const ReactGridLayout = WidthProvider(RGL);

type Props = {
  blockSetup: BlockSetup;
};

export const DroppablePage: React.FC<Props> = ({ blockSetup }) => {
  const { layout, gridLayoutProps, backgroundContainer, placeholderGridProps } =
    useDroppablePage(blockSetup);
  const { exportItemRef } = useContext(BuilderContext);
  const { clearSelection } = useSelectedBlock();

  const renderMapItem = useMemo(
    () =>
      layout.map(item => (
        <Box zIndex="docked" data-grid={item} key={item.i}>
          <ComponentMap id={item.i} />
        </Box>
      )),
    [layout],
  );

  return (
    <HStack alignItems="center" justifyContent="center">
      <Box
        id="test"
        ref={exportItemRef as React.LegacyRef<HTMLDivElement>}
        w="70vw"
        border="dark.s"
        position="relative"
        h={`${gridSettings.pageHeight}px`}
        background={backgroundContainer}
        onClick={clearSelection}
      >
        <ReactGridLayout {...gridLayoutProps}>{renderMapItem}</ReactGridLayout>
        <PlaceholderGrid {...placeholderGridProps} />
      </Box>
    </HStack>
  );
};
