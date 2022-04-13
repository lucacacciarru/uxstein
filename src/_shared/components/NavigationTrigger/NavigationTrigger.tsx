import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  triggers: unknown[];
  route?: string;
}

export const NavigationTrigger: FC<Props> = ({ triggers, route, children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!route || pathname.match(route)) return;
    navigate(route);
  }, triggers);

  return (<>{children}</>);
};
