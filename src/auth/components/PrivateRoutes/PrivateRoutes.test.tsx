//TODO: Still to test if PrivateRoutes return <Navigate /> if the user is not logged
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from '../PrivateRoutes';
import App from '../../../App';
import { render, screen } from '../../../_shared/testConfig/customRender';

const MockPrivatePage: FC = () => {
  return <div data-testid="private-page">Private page content</div>;
};

const MockLoginPage: FC = () => {
  return <div>Login page content</div>;
};

const MockRoutes: FC = () => {
  return (
    <Routes>
      <Route path="login" element={<MockLoginPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="private" element={<MockPrivatePage />} />
      </Route>
    </Routes>
  );
};

describe('App', () => {
  test('should render the PrivatePage if logged', () => {
    render(<MockRoutes />, {
      initialRoutes: ['/private'],
      mocks: { auth: { status: 'logged' } },
    });

    const privatePage = screen.getByTestId('private-page');

    expect(privatePage).toBeInTheDocument();
  });

  test('should not render PrivatePage if not logged', () => {
    render(<App />, {
      initialRoutes: ['/private'],
    });

    const privatePage = screen.queryByTestId('private-page');
    expect(privatePage).not.toBeInTheDocument();
  });
});
