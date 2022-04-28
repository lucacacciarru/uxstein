// TODO: Change key of <WrapItem> to something better, like a id prop
import { WrapItem } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { DraggableBlock, DraggableBlockProps } from './DraggableBlock';
import { BlockSetup } from '../../hooks/useBlockSetup';
import { GlobalStyleFields } from '../GlobalStyleFields/GlobalStyleFields';
import { Collapsable } from '../../../_shared/components/Collapsable';
import { DraggableBlocks } from './DraggableBlocks';

const mockedDraggableBlocks: DraggableBlockProps[] = [
  { type: 'text', iconName: 'TextIcon' },
  { type: 'image', iconName: 'Photo' },
  { type: 'text-list', iconName: 'TextList' },
  { type: 'image-list', iconName: 'Album' },
  { type: 'checkbox', iconName: 'CheckBox' },
  { type: 'progress', iconName: 'ProgressBar' },
  { type: 'rate', iconName: 'Star' },
];

type Props = {
  setBlockSetup: React.Dispatch<React.SetStateAction<BlockSetup>>;
};

export const AddTab: FC<Props> = ({ setBlockSetup }) => {
  const renderedWrapItems = useMemo(() => {
    return mockedDraggableBlocks.map((item, i) => (
      <WrapItem key={i}>
        <DraggableBlock
          iconName={item.iconName}
          type={item.type}
          setBlockSetup={setBlockSetup}
        />
      </WrapItem>
    ));
  }, [setBlockSetup]);

  return (
    <Collapsable allowToggle={false} defaultIndex={0}>
      <DraggableBlocks>{renderedWrapItems}</DraggableBlocks>
      <GlobalStyleFields />
    </Collapsable>
  );
};
