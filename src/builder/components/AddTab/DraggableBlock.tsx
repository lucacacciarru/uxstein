import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '../../../_shared/components';
import iconLibrary from '../../../_shared/components/Icon/iconLibrary';
import { BlockSetup } from '../../hooks/useBlockSetup';
import { getBlockItemSettings } from '../../config/blockItemSettings';
import { useTranslation } from 'react-i18next';

export type DraggableBlockProps = {
  type: DraggableBlockType;
  iconName: keyof typeof iconLibrary;
};

export type DraggableBlockType =
  | 'text'
  | 'image'
  | 'text-list'
  | 'image-list'
  | 'checkbox'
  | 'progress'
  | 'rate';

type Props = DraggableBlockProps & {
  setBlockSetup: React.Dispatch<React.SetStateAction<BlockSetup>>;
};

export const DraggableBlock: FC<Props> = ({
  type,
  iconName,
  setBlockSetup,
}) => {
  const { t } = useTranslation();
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
      data-testid="draggable"
    >
      <Icon name={iconName} size="8" />
      <Text as="h5" textStyle="h5" fontSize="sm">
        {t(`builder.toolBar.draggableBlocksLabels.${type}`)}
      </Text>
    </Box>
  );
};
