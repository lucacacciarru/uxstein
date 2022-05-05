import { DndContext } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { ItemAttribute } from '../../store/types';
import { useSortableList } from './useSortableList';

export type SortableListProps = {
  elementList: JSX.Element[];
  setItemsList: React.Dispatch<
    React.SetStateAction<ItemAttribute['items'] | undefined>
  >;
  updateValue: (
    items: {
      id: string;
      label?: string | undefined;
      value: string;
    }[],
  ) => void;
};

export const SortableList: React.FC<SortableListProps> = prop => {
  const { dndContextProps, renderSortableItems, sortableContextProps } =
    useSortableList(prop);
  return (
    <DndContext {...dndContextProps}>
      <SortableContext {...sortableContextProps}>
        {renderSortableItems}
      </SortableContext>
    </DndContext>
  );
};
