import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
} from '@chakra-ui/react';
import { useCallback, useMemo, useState } from 'react';
import { Icon } from '../../../_shared/components';
import { useTranslation } from 'react-i18next';
import { LoginFormData, SignupFormData } from '../types';
import { TranslationKey } from '../../../_shared/types/i18n';

type Props = {
  name: keyof SignupFormData | keyof LoginFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isInvalid: boolean;
  errorList: TranslationKey[];
};

export const AuthField: React.FC<Props> = ({
  name,
  onChange,
  value,
  isInvalid,
  errorList,
}) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassowrd] = useState(false);

  const handleShowPassword = useCallback(
    () => setShowPassowrd(prev => !prev),
    [],
  );

  const renderErrorList = useMemo(
    () => errorList.map(error => <ListItem key={error}>{t(error)}</ListItem>),
    [errorList, t],
  );

  const input = useMemo(() => {
    if (name === 'email') {
      return (
        <FormControl isInvalid={isInvalid}>
          <FormLabel textTransform="capitalize">
            {t('auth.form.fieldEmail')}
          </FormLabel>
          <Input
            role="input"
            onChange={onChange}
            value={value}
            name={name}
            type="text"
          />
          <FormErrorMessage>
            <List spacing="1">{renderErrorList}</List>
          </FormErrorMessage>
        </FormControl>
      );
    }
    return (
      <FormControl isInvalid={isInvalid}>
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
        <FormErrorMessage>
          <List spacing="1">{renderErrorList}</List>
        </FormErrorMessage>
      </FormControl>
    );
  }, [
    handleShowPassword,
    isInvalid,
    name,
    onChange,
    renderErrorList,
    showPassword,
    t,
    value,
  ]);

  return <FormControl>{input}</FormControl>;
};
