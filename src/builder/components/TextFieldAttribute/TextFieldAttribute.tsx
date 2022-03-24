import { Input } from '@chakra-ui/react';
import { useSingleAttributeField } from '../../hooks/useSingleAttributeField';
import { AttributeName } from '../../store/types';
import { TextFieldWrapper } from '../TextFieldWrapper';

type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const TextFieldAttribute: React.FC<Props> = ({ name, blockItemId }) => {
  const { value, onChange, placeholder, label, ...rest } =
    useSingleAttributeField(blockItemId, name);

  return (
    <TextFieldWrapper value={value} label={label} {...rest}>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </TextFieldWrapper>
  );
};
