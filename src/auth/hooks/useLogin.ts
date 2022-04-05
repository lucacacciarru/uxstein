import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginTrigger } from '../store/actions/login';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuthStatus } from '../store/selectors';
import { LoginFormData } from '../components';
import { validateAllField, checkLoginMap } from '../utils';
import { TranslationKey } from '../../_shared/types/i18n';
import { PATHS } from '../../_shared/types/paths';

export const useLogin = () => {
  const dispatch = useDispatch();
  const [dataFormLogin, setDataFormLogin] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const [errorDataFormLogin, setErrorDataFormLogin] = useState<
    Record<keyof LoginFormData, TranslationKey[]>
  >({
    email: [],
    password: [],
  });

  const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataFormLogin(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const login = () => {
    const currentError = validateAllField(dataFormLogin, checkLoginMap);
    setErrorDataFormLogin(currentError);
    const checkError = Object.values(currentError);
    if (checkError.every(dataForm => dataForm.length === 0)) {
      dispatch(loginTrigger(dataFormLogin));
    }
  };

  const location = useLocation();
  const navigate = useNavigate();

  const from = (location.state as string) || `/${PATHS.PERSONAS}`;
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
    errorDataFormLogin,
  };
};
