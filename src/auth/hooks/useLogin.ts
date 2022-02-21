//TODO: Fix login function
import { useState } from 'react';
import { LoginFormData } from '../components/Auth/partials';
import { useDispatch } from 'react-redux';
import { loginTrigger } from '../store/actions/login';

export const useLogin = () => {
  const dispatch = useDispatch();
  const [dataFormLogin, setDataFormLogin] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataFormLogin(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const login = (dataForm: LoginFormData) => {
    dispatch(loginTrigger(dataForm));
  };

  return {
    dataFormLogin,
    handleLoginInput,
    login,
  };
};
