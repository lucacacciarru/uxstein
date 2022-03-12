import { Box, FormLabel, Input, InputGroup, Text } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  value: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const ColorField: FC<Props> = ({
  value = '#000000',
  label,
  onChange,
}) => {
  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <InputGroup gap={'4'} alignItems="center">
        <Input
          type="color"
          value={value}
          onChange={onChange}
          width={'8'}
          height="8"
          p="0"
        />
        <Text>{value}</Text>
      </InputGroup>
    </Box>
  );
};
