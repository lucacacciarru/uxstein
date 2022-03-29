import {
  Center,
  Editable,
  EditableInput,
  EditablePreview,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useCustomEditable } from './useCustomEditable';

export const FileName: FC = () => {
  const { editableProps } = useCustomEditable();
  return (
    <Center w="full">
      <Editable {...editableProps} textAlign={'center'}>
        <EditablePreview color={'black'} />
        <EditableInput color={'black'} />
      </Editable>
    </Center>
  );
};
