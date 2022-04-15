import { useLocation, useNavigate } from 'react-router-dom';
import { DependencyList, useEffect } from 'react';

export function useNavigationTrigger(triggers: DependencyList, route?: string) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!route || pathname.match(route)) {
      return;
    }

    navigate(route);
  }, triggers);
}
