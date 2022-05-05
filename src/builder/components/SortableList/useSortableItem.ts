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
    color: isDragging ? 'black.0' : 'black.50',
    transition: 'all .3s ease',
    _focus: { border: 'none', outline: 'none', boxShadow: 'none' },
    _active: { border: 'none', outline: 'none', boxShadow: 'none' },
    ...attributes,
    ...listeners,
  };

  return {
    containerProps,
    itemProps,
    setNodeRef,
  };
};
