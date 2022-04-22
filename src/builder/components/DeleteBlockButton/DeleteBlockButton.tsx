import { IconButton } from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';
import { ConfirmDeleteModal } from './ConfirmDeleteModal';
import { useDeleteBlockButton } from './useDeleteBlockButton';

type Props = {
  id: string;
  iconColor: string;
};

export const DeleteBlockButton: React.FC<Props> = ({ id, iconColor }) => {
  const { handlerDeleteButton, isOpen, onOpen, ...rest } =
    useDeleteBlockButton(id);
  return (
    <>
      <IconButton
        aria-label=""
        variant="unstyled"
        size="icon-xs"
        icon={<Icon name="Delete" color={iconColor} />}
        onClick={onOpen}
        data-testid="deleteButton"
      />
      <ConfirmDeleteModal
        id={id}
        isOpen={isOpen}
        onClick={handlerDeleteButton}
        {...rest}
      />
    </>
  );
};
