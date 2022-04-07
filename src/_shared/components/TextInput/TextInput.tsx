import {
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  Text,
} from '@chakra-ui/react';

type Props = {
  text: {
    placeholder: string;
    title?: string;
    label?: string;
  };
} & InputProps;

export const TextInput: React.FC<Props> = ({ text, ...rest }) => {
  return (
    <Box>
      <Text as="h3" textStyle="h3">
        {text.title}
      </Text>
      <FormLabel>{text.label}</FormLabel>
      <InputGroup mt="3" flexDirection={'column'}>
        <Input {...rest} placeholder={text.placeholder} />
      </InputGroup>
    </Box>
  );
};
