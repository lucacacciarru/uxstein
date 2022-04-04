import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { PATHS } from '../../../_shared/types/paths';
import { useAuth } from '../../hooks';

export const PrivateRoutes: FC = () => {
  const { isLogged } = useAuth();
  const location = useLocation();
  const from = location.pathname;

  if (!isLogged) {
    return <Navigate to={PATHS.LOGIN} state={from} />;
  }

  return <Outlet />;
};
