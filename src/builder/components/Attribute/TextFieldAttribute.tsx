import { Box, FormLabel, Input, InputGroup } from '@chakra-ui/react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useAttributeField } from '../../hooks/useAttributeField';
import { getAttributeByNameAndId } from '../../store/selectors/getAttributeByNameAndId';
import { AttributeName } from '../../store/types';

type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const TextFieldAttribute: FC<Props> = ({ name, blockItemId }) => {
  const attribute = useSelector(getAttributeByNameAndId(name, blockItemId));
  const { label, placeholder } = useAttributeField(attribute);

  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input placeholder={placeholder} />
      </InputGroup>
    </Box>
  );
};
