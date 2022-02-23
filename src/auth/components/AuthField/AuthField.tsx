import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useCallback, useMemo, useState } from 'react';
import { Icon } from '../../../_shared/components';
import { useTranslation } from 'react-i18next';
import { LoginFormData, SignupFormData } from '../types';

type Props = {
  name: keyof SignupFormData | keyof LoginFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const AuthField: React.FC<Props> = ({ name, onChange, value }) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassowrd] = useState(false);

  const handleShowPassword = useCallback(
    () => setShowPassowrd(prev => !prev),
    [],
  );

  const input = useMemo(() => {
    if (name === 'email') {
      return (
        <>
          <FormLabel textTransform="capitalize">
            {t('auth.form.fieldEmail')}
          </FormLabel>
          <Input
            role="input"
            onChange={onChange}
            value={value}
            name={name}
            type={name}
          />
        </>
      );
    }
    return (
      <>
        <FormLabel textTransform="capitalize">
          {name === 'confirmPassword'
            ? t('auth.form.fieldConfirmPassword')
            : t('auth.form.fieldPassword')}
        </FormLabel>
        <InputGroup>
          <Input
            role="input"
            onChange={onChange}
            value={value}
            name={name}
            type={showPassword ? 'text' : 'password'}
          />

          <InputRightElement
            role={'button'}
            p="1.5"
            children={
              <Icon
                color={showPassword ? 'black.0' : 'black.50'}
                name={showPassword ? 'Hide' : 'Show'}
              />
            }
            onClick={handleShowPassword}
          />
        </InputGroup>
      </>
    );
  }, [handleShowPassword, name, onChange, showPassword, t, value]);

  return <FormControl>{input}</FormControl>;
};
