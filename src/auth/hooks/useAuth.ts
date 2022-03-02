import { useDispatch, useSelector } from 'react-redux';
import { getAuthStatus, getUserProfile } from '../store/selectors';
import { logoutTrigger } from '../store/actions/logout';

export const useAuth = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector(getAuthStatus);

  const isLogged = authStatus === 'logged';

  const logout = () => {
    dispatch(logoutTrigger({}));
  };

  const profile = useSelector(getUserProfile);

  return {
    isLogged,
    logout,
    profile,
  };
};
