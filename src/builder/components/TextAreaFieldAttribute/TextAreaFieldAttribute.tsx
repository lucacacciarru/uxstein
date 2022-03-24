import { Box, FormLabel, InputGroup, Textarea } from '@chakra-ui/react';
import { FC } from 'react';
import { useSingleAttributeField } from '../../hooks/useSingleAttributeField';
import { AttributeName } from '../../store/types';
import { AttributeStyleFields } from '../Attribute/AttributeStyleFields';

type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const TextAreaFieldAttribute: FC<Props> = ({ name, blockItemId }) => {
  const { value, onChange, label, placeholder, attributeStyleFieldsProps } =
    useSingleAttributeField(blockItemId, name);

  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Textarea placeholder={placeholder} value={value} onChange={onChange} />
      </InputGroup>
      <AttributeStyleFields {...attributeStyleFieldsProps} />
    </Box>
  );
};
