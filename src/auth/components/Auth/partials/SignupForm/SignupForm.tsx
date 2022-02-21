import { FieldAuth } from '../FieldAuth';
import { Text, Button } from '@chakra-ui/react';
import { useSignup } from '../../../../hooks/useSignup';
type Props = {
  handleTypeForm: () => void;
};
export const SignupForm: React.FC<Props> = ({ handleTypeForm }) => {
  const { dataFormSignup, handleSignupInput } = useSignup();
  return (
    <>
      <h1>Sign up</h1>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, corporis?{' '}
        <Text
          color="status.link"
          cursor="pointer"
          as="button"
          onClick={handleTypeForm}
        >
          Login in
        </Text>
      </Text>
      <Button>Sign up</Button>
    </>
  );
};
