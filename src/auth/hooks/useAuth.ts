import { useDispatch, useSelector } from 'react-redux';
import { getAuthStatus, getUserProfile } from '../store/selectors';
import { logoutTrigger } from '../store/actions/logout';
import { User } from '../store';
import { updateTrigger } from '../store/actions/update';

export const useAuth = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector(getAuthStatus);

  const isLogged = authStatus === 'logged';

  const logout = () => {
    dispatch(logoutTrigger());
  };

  const updateProfile = (
    id: string,
    proprieties: Omit<Partial<User>, 'token' | 'id'>,
  ) => {
    dispatch(updateTrigger({ id, proprieties }));
  };

  const profile = useSelector(getUserProfile);

  return {
    isLogged,
    logout,
    profile,
    updateProfile,
  };
};
