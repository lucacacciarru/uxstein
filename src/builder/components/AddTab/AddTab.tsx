// TODO: Change key of <WrapItem> to something better, like a id prop
import { Center, Stack, Wrap, WrapItem } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { DraggableBlock, DraggableBlockProps } from './DraggableBlock';
import { SearchBar } from '../../../_shared/components/SearchBar';
import { BlockSetup } from '../../hooks/useBlockSetup';
import { GlobalStyleFields } from '../GlobalStyleFields/GlobalStyleFields';

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
    <Stack spacing={'8'}>
      <SearchBar />
      <Center>
        <Wrap spacing={'4'}>{renderedWrapItems}</Wrap>
      </Center>
      <GlobalStyleFields />
    </Stack>
  );
};
