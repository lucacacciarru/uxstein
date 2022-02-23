import { AuthField } from '../AuthField';
import { Text, Button, Stack, Flex } from '@chakra-ui/react';
import React from 'react';
import { useSignup } from '../../../../hooks/useSignup';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const SignupForm: React.FC = () => {
  const { t } = useTranslation();
  const { dataFormSignup, handleSignupInput } = useSignup();
  function handlerForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
          <h1>{t('auth.form.titleSignup')}</h1>
          <AuthField
            name="email"
            onChange={handleSignupInput}
            value={dataFormSignup.email}
          />
          <AuthField
            name="password"
            onChange={handleSignupInput}
            value={dataFormSignup.password}
          />
          <AuthField
            name="confirmPassword"
            onChange={handleSignupInput}
            value={dataFormSignup.confirmPassword}
          />

          <Text as="p">
            {t('auth.form.textForLogin')}{' '}
            <Text color="status.link" cursor="pointer" as="span">
              <Link to="/login">{t('auth.form.linkForLogin')}</Link>
            </Text>
          </Text>
          <Button type="submit">{t('auth.form.buttonSignup')}</Button>
        </Stack>
      </form>
    </Flex>
  );
};
