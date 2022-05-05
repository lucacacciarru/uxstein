import { BoxProps } from '@chakra-ui/react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { CustomIconProps } from '../../../_shared/components';

export const useSortableItem = (id: string) => {
  const {
    setNodeRef,
    transform,
    transition,
    attributes,
    listeners,
    isDragging,
  } = useSortable({
    id,
  });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const containerProps: BoxProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    flexDir: 'row-reverse',
    style,
    borderBottom: '2px solid black',
    p: '4',
    zIndex: isDragging ? 'overlay' : 'auto',
    bg: 'white.bg',
  };

  const itemProps: CustomIconProps = {
    size: '6',
    name: 'Drag',
    cursor: 'grab',
    color: 'black.50',
    _hover: { color: 'black.0' },
    transition: 'all .3s ease',

    ...attributes,
    ...listeners,
  };

  return {
    containerProps,
    itemProps,
    setNodeRef,
  };
};
