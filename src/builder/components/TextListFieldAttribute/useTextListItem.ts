import { IconButtonProps } from '@chakra-ui/react';
import React from 'react';

type Params = {
  id: string;
  onChangeLabel: (id: string, label: string) => void;
  deleteItem: (id: string) => void;
};

export function useTextListItem({ id, onChangeLabel, deleteItem }: Params) {
  const handlerOnChangeLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeLabel(id, e.target.value);
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
    iconButtonProps,
  };
}
