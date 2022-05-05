import React from 'react';
import { useDeleteItemButton } from '../../hooks/useDeleteItemButton';

type Params = {
  id: string;
  onChangeLabel: (id: string, label: string) => void;
  onChangeValue: (id: string, value: string) => void;
  deleteItem: (id: string) => void;
};

export function useRateFieldItem({
  deleteItem,
  id,
  onChangeLabel,
  onChangeValue,
}: Params) {
  const { iconButtonProps } = useDeleteItemButton({ id, deleteItem });

  const handlerOnChangeLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeLabel(id, e.target.value);
  };

  const handlerOnClickValue = (
    e: React.MouseEvent<HTMLButtonElement>,
    newValue: string,
  ) => {
    e.preventDefault();
    onChangeValue(id, newValue);
  };

  return {
    handlerOnChangeLabel,
    handlerOnClickValue,
    iconButtonProps,
  };
}
