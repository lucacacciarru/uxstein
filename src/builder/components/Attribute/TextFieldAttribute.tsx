import { Box, FormLabel, Input, InputGroup } from '@chakra-ui/react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getAttributeByNameAndId } from '../../store/selectors/getAttributeByNameAndId';
import { AttributeName } from '../../store/types';

type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const TextFieldAttribute: FC<Props> = ({ name, blockItemId }) => {
  const attribute = useSelector(getAttributeByNameAndId(name, blockItemId));

  return (
    <Box>
      <FormLabel>{attribute?.label}</FormLabel>
      <InputGroup>
        <Input placeholder={attribute?.placeholder} />
      </InputGroup>
    </Box>
  );
};
