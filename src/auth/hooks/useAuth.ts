import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuthStatus } from '../selectors/getAuthStatus';
import { getUserProfile } from '../selectors/getUserProfile';
import { logoutTrigger } from '../store/actions/logout';
import { useLogin } from './useLogin';
import { useSignup } from './useSignup';

export const useAuth = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state as string;
  const authStatus = useSelector(getAuthStatus);
  const isLogged = authStatus === 'logged';

  const logout = () => {
    dispatch(logoutTrigger({}));
  };

  useEffect(() => {
    if (isLogged && from) {
      navigate(from, { replace: true });
    }
  }, [isLogged, from, navigate]);

  const profile = useSelector(getUserProfile);

  const { dataFormLogin, handleLoginInput, login } = useLogin();
  const { dataFormSignup, handleSignupInput } = useSignup();

  return {
    logout,
    isLogged,
    profile,
    dataFormLogin,
    handleLoginInput,
    login,
    handleSignupInput,
    dataFormSignup,
  };
};
