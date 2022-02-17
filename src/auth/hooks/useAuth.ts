import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginTrigger } from '../store/actions/login';

export const useAuth = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state as string;
  //TODO: Create getAuthStatus selector and use it here
  //const authStatus = useSelector(getAuthStatus);
  //isLogged = authStatus === 'logged';
  const store: any = useSelector(state => state);
  const isLogged = store.auth?.status && store.auth.status === 'logged';

  const login = async () => {
    dispatch(loginTrigger({ email: '', password: '' }));
  };

  useEffect(() => {
    if (isLogged && from) {
      navigate(from, { replace: true });
    }
  }, [isLogged, from, navigate]);

  return {
    login,
    isLogged,
  };
};
