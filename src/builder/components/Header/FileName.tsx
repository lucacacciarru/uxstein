import {
  Center,
  Editable,
  EditableInput,
  EditablePreview,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useCustomEditable } from './useCustomEditable';

type Props = {
  id?: string;
};

export const FileName: FC<Props> = ({ id }) => {
  const { editableProps } = useCustomEditable(id);
  return (
    <Center w="full">
      <Editable {...editableProps} textAlign={'center'}>
        <EditablePreview color={'black'} />
        <EditableInput color={'black'} />
      </Editable>
    </Center>
  );
};
