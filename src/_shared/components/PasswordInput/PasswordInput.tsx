import {
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { Icon } from '..';
import { usePasswordInput } from './usePasswordInput';

type Props = {
  label?: string;
} & InputProps;

export const PasswordInput: React.FC<Props> = ({ label, ...rest }) => {
  const { iconName, inputType, handleShowPassword, iconColor } =
    usePasswordInput();

  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input {...rest} type={inputType} />
        <InputRightElement
          p="2"
          children={<Icon name={iconName} color={iconColor} />}
          onClick={handleShowPassword}
        />
      </InputGroup>
    </Box>
  );
};
