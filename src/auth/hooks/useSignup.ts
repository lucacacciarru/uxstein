import { useState } from 'react';
import { SignupFormData } from '../components/Auth/partials';

export const useSignup = () => {
  const [dataFormSignup, setDataFormSignup] = useState<SignupFormData>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignupInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataFormSignup(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    dataFormSignup,
    handleSignupInput,
  };
};
