import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './style.css';
import RGL, { WidthProvider } from 'react-grid-layout';
import { ComponentMap } from '../ComponentMap/ComponentMap';
import { useDroppablePage } from './useDroppablePage';
import { BlockSetup } from '../../hooks/useBlockSetup';
import { useSelectedBlock } from '../../hooks/useSelectedBlock';
import { Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { BuilderContext } from '../BuilderContext';

const ReactGridLayout = WidthProvider(RGL);

type Props = {
  blockSetup: BlockSetup;
};

export const DroppablePage: React.FC<Props> = ({ blockSetup }) => {
  const { layout, gridLayoutProps } = useDroppablePage(blockSetup);
  const { selectBlock } = useSelectedBlock();
  const { exportItemRef } = useContext(BuilderContext);

  return (
    <Box id="test" ref={exportItemRef as React.LegacyRef<HTMLDivElement>}>
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
    </Box>
  );
};
