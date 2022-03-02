import { AuthField } from '../AuthField';
import { Text, Button, Stack, Flex } from '@chakra-ui/react';
import { useLogin } from '../../hooks/useLogin';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const { dataFormLogin, handleLoginInput, login, errorDataFormLogin } =
    useLogin();
  function handlerForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login();
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
            {t('auth.form.titleLogin')}
          </Text>
          <AuthField
            name="email"
            onChange={handleLoginInput}
            value={dataFormLogin.email}
            isInvalid={errorDataFormLogin.email.length > 0}
            errorList={errorDataFormLogin.email}
          />
          <AuthField
            name="password"
            onChange={handleLoginInput}
            value={dataFormLogin.password}
            isInvalid={errorDataFormLogin.password.length > 0}
            errorList={errorDataFormLogin.password}
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
