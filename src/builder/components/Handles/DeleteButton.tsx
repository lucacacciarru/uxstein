import { Center, IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '../../../_shared/components';
import { useDeleteBlock } from '../../hooks/useDeleteBlock';

type Props = {
  color: string;
  id: string;
};

export const DeleteButton: FC<Props> = ({ color, id }) => {
  const { deleteBlock } = useDeleteBlock();
  const handlerDeleteButton = () => {
    deleteBlock(id);
  };
  return (
    <Center
      position="absolute"
      top="0"
      right="0"
      pr="2"
      pt="2"
      cursor="pointer"
      className="delete-block"
    >
      <IconButton
        aria-label=""
        variant="unstyled"
        size="icon-sm"
        icon={<Icon name="Delete" color={color} />}
        onClick={handlerDeleteButton}
        data-testid="deleteButton"
      />
    </Center>
  );
};
