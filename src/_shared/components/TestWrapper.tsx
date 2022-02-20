import { FC } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { loginSuccess } from '../../auth/store/actions/login';
import { store } from '../store';

type Props = {
  isLogged?: boolean;
};

export const TestWrapper: FC<Props> = ({ children, isLogged }) => {
  if (isLogged) {
    return (
      <Provider store={store}>
        <FakeLogin>
          <Router>{children}</Router>
        </FakeLogin>
      </Provider>
    );
  }
  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
};

const FakeLogin: FC = ({ children }) => {
  const dispatch = useDispatch();
  dispatch(loginSuccess({ username: '', email: '', password: '' }));
  return <>{children}</>;
};
