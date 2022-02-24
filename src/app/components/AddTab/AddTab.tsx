import { Center, Stack, Wrap, WrapItem } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { BlockItem, BlockItemProps } from './BlockItem';
import { SearchBar } from '../../../_shared/components/SearchBar';

const mockedBolckItems: BlockItemProps[] = [
  { name: 'Text', iconName: 'TextIcon' },
  { name: 'Image', iconName: 'Photo' },
  { name: 'Text-list', iconName: 'TextList' },
  { name: 'Checkbox', iconName: 'CheckBox' },
  { name: 'Progress', iconName: 'ProgressBar' },
  { name: 'Rate', iconName: 'Star' },
];

export const AddTab: FC = () => {
  const renderedWrapItems = useMemo(() => {
    return mockedBolckItems.map(item => (
      <WrapItem>
        <BlockItem iconName={item.iconName} name={item.name} />
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
