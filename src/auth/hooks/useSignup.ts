import { useState } from 'react';
import { TranslationKey } from '../../_shared/types/i18n';
import { SignupFormData } from '../components';
import { checkSignupMap, validateAllField } from '../utils';

export const useSignup = () => {
  const [dataFormSignup, setDataFormSignup] = useState<SignupFormData>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorDataFormSignup, setErrorDataFormSignup] = useState<
    Record<keyof SignupFormData, TranslationKey[]>
  >({
    email: [],
    password: [],
    confirmPassword: [],
  });

  function signup() {
    const currentError = validateAllField(dataFormSignup, checkSignupMap);
    setErrorDataFormSignup(prev => ({ ...prev, ...currentError }));
    const checkError = Object.values(currentError);
    if (checkError.every(dataForm => dataForm.length === 0)) {
      //TODO: ADD REGISTER
    }
  }

  const handleSignupInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataFormSignup(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    dataFormSignup,
    handleSignupInput,
    signup,
    errorDataFormSignup,
  };
};
