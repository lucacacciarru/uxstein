import { FieldAuth } from '../FieldAuth';
import { Text, Button, Stack, Flex } from '@chakra-ui/react';
import { useLogin } from '../../../../hooks/useLogin';
import React from 'react';
import { Link } from 'react-router-dom';

export const LoginForm: React.FC = () => {
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
          <h1>Login</h1>
          <FieldAuth
            nameInput="email"
            handleInput={handleLoginInput}
            value={dataFormLogin.email}
          />
          <FieldAuth
            nameInput="password"
            handleInput={handleLoginInput}
            value={dataFormLogin.password}
          />

          <Text as="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            corporis?{' '}
            <Text color="status.link" cursor="pointer" as="span">
              <Link to="/signup">Signup</Link>
            </Text>
          </Text>
          <Button type="submit">Login</Button>
        </Stack>
      </form>
    </Flex>
  );
};
