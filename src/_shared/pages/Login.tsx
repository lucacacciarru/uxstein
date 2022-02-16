import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { useAuth } from '../../auth/hooks';

export const Login: FC = () => {
  const { login } = useAuth();
  return (
    <>
      <Button variant={'solid'} onClick={login}>
        Login
      </Button>
    </>
  );
};
