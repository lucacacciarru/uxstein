import {
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
} from '@chakra-ui/react';
import { useCallback, useMemo, useState } from 'react';
import { SignupFormData } from '../types';
import { Icon } from '../../../../../_shared/components';

type Props = {
  nameInput: keyof SignupFormData;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const FieldAuth: React.FC<Props> = ({
  nameInput,
  handleInput,
  value,
}) => {
  const [showPassword, setShowPassowrd] = useState(false);

  const handleShowPassword = useCallback(
    () => setShowPassowrd(prev => !prev),
    [],
  );

  const input = useMemo(() => {
    if (nameInput === 'email') {
      return (
        <>
          <FormLabel textTransform="capitalize">{nameInput}</FormLabel>
          <Input
            onChange={handleInput}
            value={value}
            name={nameInput}
            type={nameInput}
          />
        </>
      );
    }
    return (
      <>
        <FormLabel textTransform="capitalize">Confirm Password</FormLabel>
        <Input
          onChange={handleInput}
          value={value}
          name={nameInput}
          type={showPassword ? 'text' : 'password'}
        />
        <InputRightElement onClick={handleShowPassword}>
          <Icon
            color={showPassword ? 'black.0' : 'black.50'}
            name={showPassword ? 'Hide' : 'Show'}
          />
        </InputRightElement>
      </>
    );
  }, [handleInput, handleShowPassword, nameInput, showPassword, value]);

  return <FormControl>{input}</FormControl>;
};
