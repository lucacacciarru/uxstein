import {
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';

import { useTextListItem } from './useTextListItem';

type Props = {
  label?: string;
  id: string;
  onChangeLabel: (id: string, label: string) => void;
  deleteItem: (id: string) => void;
};

export const TextListFieldItem: React.FC<Props> = ({ label, ...rest }) => {
  const { handlerOnChangeLabel, iconButtonProps } = useTextListItem({
    ...rest,
  });
  return (
    <HStack>
      <Editable defaultValue={label}>
        <EditablePreview />
        <EditableInput pl="1" onChange={handlerOnChangeLabel} value={label} />
      </Editable>
      <IconButton {...iconButtonProps} icon={<Icon name="Delete" color="" />} />
    </HStack>
  );
};
