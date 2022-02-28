import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './style.css';
import { FC } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import { ComponentMap } from '../ComponentMap/ComponentMap';
import { useDroppablePage } from './useDroppablePage';
import { BlockSetup } from '../../hooks/useBlockSetup';

const ReactGridLayout = WidthProvider(RGL);

export const DroppablePage: FC<{ blockSetup: BlockSetup }> = ({
  blockSetup,
}) => {
  const { layout, gridLayoutProps } = useDroppablePage(blockSetup);

  return (
    <>
      <ReactGridLayout {...gridLayoutProps}>
        {layout.map(item => (
          <div data-grid={item} key={item.i}>
            <ComponentMap id={item.i} />
          </div>
        ))}
      </ReactGridLayout>
    </>
  );
};
