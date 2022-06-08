import React from 'react';
import { HistoryRouterProps, Router } from 'react-router-dom';

export const CustomRouter: React.FC<HistoryRouterProps> = ({
  basename,
  children,
  history,
}) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => {
      history.listen(() => setState({
        action: history.action,
        location: history.location,
      }))
  }, [history.location, history.action]);

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};
