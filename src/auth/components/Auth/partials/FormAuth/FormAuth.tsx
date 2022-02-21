import { Box, Stack } from '@chakra-ui/react';
import { useCallback, useMemo, useState } from 'react';
import { useAuth } from '../../../../hooks';
import { LoginForm } from '../LoginForm';
import { SignupForm } from '../SignupForm';

export const FormAuth = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const { login, dataFormLogin } = useAuth();

  const handleTypeForm = useCallback(() => {
    setIsLoginForm(prev => !prev);
  }, []);

  function handlerSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isLoginForm) {
      login(dataFormLogin);
    }
  }

  const renderTypeOfForm = useMemo(() => {
    return isLoginForm ? (
      <LoginForm handleIsLogin={handleTypeForm} />
    ) : (
      <SignupForm handleTypeForm={handleTypeForm} />
    );
  }, [handleTypeForm, isLoginForm]);

  return (
    <Box p="8" width={'20vw'} boxShadow="noBlur.dark.m" border={'dark.s'}>
      <form onSubmit={handlerSubmit} style={{ width: '100%' }}>
        <Stack spacing={'8'}>{renderTypeOfForm}</Stack>
      </form>
    </Box>
  );
};
