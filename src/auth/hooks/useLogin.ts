import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginTrigger } from '../store/actions/login';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuthStatus } from '../selectors/getAuthStatus';
import { LoginFormData } from '../components';

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

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state as string;
  const authStatus = useSelector(getAuthStatus);
  const isLogged = authStatus === 'logged';

  useEffect(() => {
    if (isLogged && from) {
      navigate(from, { replace: true });
    }
  }, [isLogged, from, navigate]);

  return {
    dataFormLogin,
    handleLoginInput,
    login,
  };
};
