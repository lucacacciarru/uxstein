// TODO: Change key of <WrapItem> to something better, like a id prop
import { Center, Stack, Wrap, WrapItem } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { BlockItem, BlockItemProps } from './BlockItem';
import { SearchBar } from '../../../_shared/components/SearchBar';
import { BlockSetup } from '../../hooks/useBlockSetup';

const mockedBolckItems: BlockItemProps[] = [
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
    return mockedBolckItems.map((item, i) => (
      <WrapItem key={i}>
        <BlockItem
          iconName={item.iconName}
          type={item.type}
          setBlockSetup={setBlockSetup}
        />
      </WrapItem>
    ));
  }, []);

  return (
    <Stack spacing={'8'}>
      <SearchBar />
      <Center>
        <Wrap spacing={'4'}>{renderedWrapItems}</Wrap>
      </Center>
    </Stack>
  );
};
