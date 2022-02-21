import { FieldAuth } from '../FieldAuth';
import { Text, Button } from '@chakra-ui/react';
import { useLogin } from '../../../../hooks/useLogin';

type Props = {
  handleIsLogin: () => void;
};

export const LoginForm: React.FC<Props> = ({ handleIsLogin }) => {
  const { dataFormLogin, handleLoginInput } = useLogin();
  return (
    <>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, corporis?{' '}
        <Text
          color="status.link"
          cursor="pointer"
          as="button"
          onClick={handleIsLogin}
        >
          Sign up
        </Text>
      </Text>
      <Button type="submit">Login</Button>
    </>
  );
};
