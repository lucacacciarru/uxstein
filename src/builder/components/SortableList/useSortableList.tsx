import {
  closestCenter,
  DragEndEvent,
  PointerSensor,
  useSensor,
} from '@dnd-kit/core';
import { arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { useMemo } from 'react';
import { SortableItem } from './SortableItem';
import { SortableListProps } from './SortableList';

export const useSortableList = ({
  elementList,
  setItemsList,
  updateValue,
}: SortableListProps) => {
  const sensor = [useSensor(PointerSensor)];
  const sortableContextProps = {
    items: elementList.map(item => item.props.id),
    strategy: verticalListSortingStrategy,
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setItemsList(prev => {
        const oldIndex = prev?.findIndex(
          item => item.id === active.id,
        ) as number;
        const newIndex = prev?.findIndex(
          item => item.id === over?.id,
        ) as number;

        const newArray = arrayMove(prev || [], oldIndex, newIndex);
        updateValue(newArray);
        return newArray;
      });
    }
  };

  const renderSortableItems = useMemo(
    () =>
      elementList.map(item => (
        <SortableItem id={item.props.id} key={item.props.id}>
          {item}
        </SortableItem>
      )),
    [elementList],
  );

  return {
    sortableContextProps,
    dndContextProps: {
      sensor,
      collisionDetection: closestCenter,
      onDragEnd,
      modifiers: [restrictToVerticalAxis],
    },
    renderSortableItems,
  };
};
