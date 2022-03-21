import { IconButtonProps } from '@chakra-ui/react';
import React from 'react';

type Params = {
  id: string;
  value: string;
  onChangeLabel: (id: string, label: string) => void;
  onChangeValue: (id: string, value: string) => void;
  deleteItem: (id: string) => void;
};

export function useRateFieldItem({
  deleteItem,
  id,
  onChangeLabel,
  onChangeValue,
  value,
}: Params) {
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

  const iconButtonProps: IconButtonProps = {
    'aria-label': 'Delete',
    variant: 'ghost',
    color: 'black.50',
    _hover: { color: 'black.0' },
    size: 'icon-xs',
    pos: 'absolute',
    right: '10',
    onClick: () => deleteItem(id),
  };

  return {
    handlerOnChangeLabel,
    handlerOnClickValue,
    iconButtonProps,
  };
}
