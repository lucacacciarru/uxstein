import { useDispatch, useSelector } from 'react-redux';
import { getAuthStatus } from '../selectors/getAuthStatus';
import { getUserProfile } from '../selectors/getUserProfile';
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
