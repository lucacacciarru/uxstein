import { Box, FormLabel, Input, InputGroup } from '@chakra-ui/react';
import { FC } from 'react';
import { useAttributeFieldByIdAndName } from '../../hooks/useAttributeFieldByIdAndName';
import { AttributeName } from '../../store/types';

type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const TextFieldAttribute: FC<Props> = ({ name, blockItemId }) => {
  const { value, onChange, label, placeholder } = useAttributeFieldByIdAndName(
    blockItemId,
    name,
  );

  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input placeholder={placeholder} value={value} onChange={onChange} />
      </InputGroup>
    </Box>
  );
};
