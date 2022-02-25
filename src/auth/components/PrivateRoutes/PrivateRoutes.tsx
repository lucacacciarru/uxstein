import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks';

export const PrivateRoutes: FC = () => {
  const { isLogged } = useAuth();
  const location = useLocation();
  const from = location.pathname;

  if (!isLogged) {
    return <Navigate to="/login" state={from} />;
  }

  return <Outlet />;
};
