import {
  Checkbox,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '../../../_shared/components';
import { useCheckboxItem } from './useCheckboxItem';

type Props = {
  label?: string;
  value: string;
  id: string;
  onChangeLabel: (id: string, label: string) => void;
  onChangeValue: (id: string, value: string) => void;
  deleteItem: (id: string) => void;
};

export const CheckboxFieldItem: FC<Props> = ({ label, ...rest }) => {
  const {
    isChecked,
    handlerOnChangeLabel,
    handlerOnChangeValue,
    iconButtonProps,
  } = useCheckboxItem({ ...rest });

  return (
    <>
      <HStack>
        <Checkbox
          isChecked={isChecked}
          onChange={handlerOnChangeValue}
          iconColor="brand.primary"
        />
        <Editable defaultValue={label}>
          <EditablePreview />
          <EditableInput pl="1" onChange={handlerOnChangeLabel} value={label} />
        </Editable>
        <IconButton
          {...iconButtonProps}
          icon={<Icon name="Delete" color="" />}
        />
      </HStack>
      <Divider />
    </>
  );
};
