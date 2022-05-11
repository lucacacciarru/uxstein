import { Box } from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';
import { useSortableItem } from './useSortableItem';

type Props = {
  id: string;
};
export const SortableItem: React.FC<Props> = ({ id, children }) => {
  const { containerProps, itemProps, setNodeRef } = useSortableItem(id);
  return (
    <Box ref={setNodeRef} {...containerProps}>
      <Icon {...itemProps} />
      {children}
    </Box>
  );
};
