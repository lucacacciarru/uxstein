import { IconButtonProps } from '@chakra-ui/react';

type Params = {
  id: string;
  deleteItem: (id: string) => void;
};

export const useDeleteItemButton = ({ id, deleteItem }: Params) => {
  const iconButtonProps: IconButtonProps = {
    'aria-label': 'Delete',
    variant: 'ghost',
    color: 'black.50',
    _hover: { color: 'black.0' },
    size: '6',
    onClick: () => deleteItem(id),
  };

  return {
    iconButtonProps,
  };
};
