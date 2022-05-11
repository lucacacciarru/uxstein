import React from 'react';
import { useDeleteItemButton } from '../../hooks/useDeleteItemButton';

type Params = {
  id: string;
  onChangeLabel: (id: string, label: string) => void;
  deleteItem: (id: string) => void;
};

export function useTextListItem({ id, onChangeLabel, deleteItem }: Params) {
  const handlerOnChangeLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeLabel(id, e.target.value);
  };

  const { iconButtonProps } = useDeleteItemButton({ id, deleteItem });

  return {
    handlerOnChangeLabel,
    iconButtonProps,
  };
}
