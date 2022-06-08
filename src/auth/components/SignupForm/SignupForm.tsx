import { AuthField } from '../AuthField';
import { Text, Button, Stack, Flex } from '@chakra-ui/react';
import React from 'react';
import { useSignup } from '../../hooks';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PATHS } from '../../../_shared/types/paths';

export const SignupForm: React.FC = () => {
  const { t } = useTranslation();
  const { dataFormSignup, handleSignupInput, signup, errorDataFormSignup } =
    useSignup();
  function handlerForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signup();
  }
  return (
    <Flex width={'50%'} alignItems="center" justifyContent="center">
      <form onSubmit={handlerForm}>
        <Stack
          spacing="8"
          width="22vw"
          p="8"
          border="dark.s"
          boxShadow="noBlur.dark.m"
        >
          <Text as="h1" textStyle="h1">
            {t('auth.form.titleSignup')}
          </Text>
          <AuthField
            name="email"
            onChange={handleSignupInput}
            value={dataFormSignup.email}
            isInvalid={errorDataFormSignup.email.length > 0 ? true : false}
            errorList={errorDataFormSignup.email}
          />
          <AuthField
            name="password"
            onChange={handleSignupInput}
            value={dataFormSignup.password}
            isInvalid={errorDataFormSignup.password.length > 0 ? true : false}
            errorList={errorDataFormSignup.password}
          />
          <AuthField
            name="confirmPassword"
            onChange={handleSignupInput}
            value={dataFormSignup.confirmPassword}
            isInvalid={
              errorDataFormSignup.confirmPassword.length > 0 ? true : false
            }
            errorList={errorDataFormSignup.confirmPassword}
          />

          <Text as="p">
            {t('auth.form.textForLogin')}{' '}
            <Text color="status.link" cursor="pointer" as="span">
              <Link to={`/${PATHS.LOGIN}`}>{t('auth.form.linkForLogin')}</Link>
            </Text>
          </Text>
          <Button type="submit">{t('auth.form.buttonSignup')}</Button>
        </Stack>
      </form>
    </Flex>
  );
};
