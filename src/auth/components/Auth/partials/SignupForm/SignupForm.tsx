import { FieldAuth } from '../FieldAuth';
import { Text, Button, Stack, Flex } from '@chakra-ui/react';
import React from 'react';
import { useSignup } from '../../../../hooks/useSignup';
import { Link } from 'react-router-dom';

export const SignupForm: React.FC = () => {
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
          <h1>Signup</h1>
          <FieldAuth
            nameInput="email"
            handleInput={handleSignupInput}
            value={dataFormSignup.email}
          />
          <FieldAuth
            nameInput="password"
            handleInput={handleSignupInput}
            value={dataFormSignup.password}
          />
          <FieldAuth
            nameInput="confirmPassword"
            handleInput={handleSignupInput}
            value={dataFormSignup.confirmPassword}
          />

          <Text as="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            corporis?{' '}
            <Text color="status.link" cursor="pointer" as="span">
              <Link to="/login">Login</Link>
            </Text>
          </Text>
          <Button type="submit">Login</Button>
        </Stack>
      </form>
    </Flex>
  );
};
