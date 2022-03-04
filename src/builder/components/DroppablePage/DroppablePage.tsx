import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './style.css';
import { FC } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import { ComponentMap } from '../ComponentMap/ComponentMap';
import { useDroppablePage } from './useDroppablePage';
import { BlockSetup } from '../../hooks/useBlockSetup';
import { useSeletedBlock } from '../../hooks/useSelectedBlock';
import { Box } from '@chakra-ui/react';

const ReactGridLayout = WidthProvider(RGL);

export const DroppablePage: FC<{ blockSetup: BlockSetup }> = ({
  blockSetup,
}) => {
  const { layout, gridLayoutProps } = useDroppablePage(blockSetup);
  const { selectBlock } = useSeletedBlock();

  return (
    <>
      <ReactGridLayout {...gridLayoutProps}>
        {layout.map(item => (
          <Box
            data-grid={item}
            key={item.i}
            onClick={() => {
              selectBlock(item.i);
            }}
          >
            <ComponentMap id={item.i} />
          </Box>
        ))}
      </ReactGridLayout>
    </>
  );
};
