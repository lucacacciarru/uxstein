import { AuthField } from '../AuthField';
import { Text, Button, Stack, Flex } from '@chakra-ui/react';
import { useLogin } from '../../../../hooks/useLogin';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const { dataFormLogin, handleLoginInput, login } = useLogin();
  function handlerForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login(dataFormLogin);
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
          <h1>{t('auth.form.titleLogin')}</h1>
          <AuthField
            name="email"
            onChange={handleLoginInput}
            value={dataFormLogin.email}
          />
          <AuthField
            name="password"
            onChange={handleLoginInput}
            value={dataFormLogin.password}
          />

          <Text as="p">
            {t('auth.form.textForSignup')}{' '}
            <Text color="status.link" cursor="pointer" as="span">
              <Link to="/signup">{t('auth.form.linkForSignup')}</Link>
            </Text>
          </Text>
          <Button type="submit">{t('auth.form.buttonLogin')}</Button>
        </Stack>
      </form>
    </Flex>
  );
};
