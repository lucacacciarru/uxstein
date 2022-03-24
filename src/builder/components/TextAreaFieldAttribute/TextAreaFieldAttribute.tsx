import { Textarea } from '@chakra-ui/react';
import { FC } from 'react';
import { useSingleAttributeField } from '../../hooks/useSingleAttributeField';
import { AttributeName } from '../../store/types';
import { TextFieldWrapper } from '../TextFieldWrapper';

type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const TextAreaFieldAttribute: FC<Props> = ({ name, blockItemId }) => {
  const { value, onChange, placeholder, label, ...rest } =
    useSingleAttributeField(blockItemId, name);

  return (
    <TextFieldWrapper value={value} label={label} {...rest}>
      <Textarea placeholder={placeholder} value={value} onChange={onChange} />
    </TextFieldWrapper>
  );
};
