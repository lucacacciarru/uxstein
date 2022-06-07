import { NavigateOptions, useLocation, useNavigate } from 'react-router-dom';
import { DependencyList, useEffect } from 'react';

export function useNavigationTrigger(
  route: string | undefined,
  triggers: DependencyList,
  options?: NavigateOptions,
) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!route || pathname.match(route)) {
      return;
    }

    navigate(route, options);
  }, triggers);
}
