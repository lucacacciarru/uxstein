import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '../../../_shared/components';
import iconLibrary from '../../../_shared/components/Icon/iconLibrary';
import { BlockSetup } from '../../hooks/useBlockSetup';
import { getBlockItemSettings } from './blockItemSettings';

export type BlockItemProps = {
  type: BlockItemType;
  iconName: keyof typeof iconLibrary;
};

export type BlockItemType =
  | 'text'
  | 'image'
  | 'text-list'
  | 'image-list'
  | 'checkbox'
  | 'progress'
  | 'rate';

type Props = BlockItemProps & {
  setBlockSetup: React.Dispatch<React.SetStateAction<BlockSetup>>;
};

export const BlockItem: FC<Props> = ({ type, iconName, setBlockSetup }) => {
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', '');
    setBlockSetup(getBlockItemSettings(type));
  };

  return (
    <Box
      border={'dark.s'}
      borderRadius="md"
      textAlign={'center'}
      w="24"
      minH="24"
      py="4"
      className="droppable-element"
      unselectable="on"
      draggable={true}
      onDragStart={onDragStart}
    >
      <Icon name={iconName} size="8" />
      <Text as="h5" textStyle="h5">
        {type}
      </Text>
    </Box>
  );
};
