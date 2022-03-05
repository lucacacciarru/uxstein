// TODO: need to test logic for navigate user to the path requested before login
import { renderHook } from '../../_shared/testConfig/customRenderHook';
import { useLogin } from '.';
import { LoginFormData } from '../components';
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '../../_shared/testConfig/customRender';

describe('useLogin', () => {
  test('dataFormLogin by default should have empty values', () => {
    const { result } = renderHook(() => useLogin());

    const expected: LoginFormData = {
      email: '',
      password: '',
    };

    expect(result.current.dataFormLogin).toEqual(expected);
  });

  test('dataFormLogin should match if call hadleLoginInput on email field', async () => {
    const { result } = renderHook(() => useLogin());

    const expected: LoginFormData = {
      email: 'mail@mail.com',
      password: '',
    };

    render(
      <input
        onChange={result.current.handleLoginInput}
        value={result.current.dataFormLogin.email}
        data-testid="email-input"
        name="email"
      />,
    );
    const input = screen.getByTestId('email-input');
    fireEvent.change(input, { target: { value: 'mail@mail.com' } });

    expect(result.current.dataFormLogin).toEqual(expected);
  });

  test('dataFormLogin should match if call hadleLoginInput on password field', () => {
    const { result } = renderHook(() => useLogin());

    const expected: LoginFormData = {
      email: '',
      password: 'aaa',
    };

    render(
      <input
        onChange={result.current.handleLoginInput}
        value={result.current.dataFormLogin.password}
        data-testid="password-input"
        name="password"
      />,
    );

    const password = screen.getByTestId('password-input');
    fireEvent.change(password, { target: { value: 'aaa' } });

    expect(result.current.dataFormLogin).toEqual(expected);
  });

  test('errorDataFormLogin should have errors inside array if field conditions are not satisfied', () => {
    const { result } = renderHook(() => useLogin());

    render(
      <form onSubmit={() => result.current.login()}>
        <input
          onChange={result.current.handleLoginInput}
          value={result.current.dataFormLogin.password}
          data-testid="password-input"
          name="password"
        />
        ,
        <button type="submit" data-testid="button-submit">
          Test
        </button>
      </form>,
    );
    const button = screen.getByTestId('button-submit');
    fireEvent.click(button);

    Object.values(result.current.errorDataFormLogin).forEach(errorList => {
      expect(errorList.length).not.toEqual(0);
    });
  });
  test('errorDataFormLogin should not have errors inside array if field conditions are satisfied', async () => {
    const { result } = renderHook(() => useLogin());

    render(
      <form onSubmit={result.current.login}>
        <input
          onChange={result.current.handleLoginInput}
          value={result.current.dataFormLogin.email}
          data-testid="email-input"
          name="email"
        />
        <input
          onChange={result.current.handleLoginInput}
          value={result.current.dataFormLogin.password}
          data-testid="password-input"
          name="password"
          type="password"
        />
        <button type="submit" data-testid="button-submit">
          Test
        </button>
      </form>,
    );
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const button = screen.getByTestId('button-submit');
    fireEvent.change(inputEmail, { target: { value: 'test@test.com' } });
    fireEvent.change(inputPassword, { target: { value: 'testtesttest' } });
    await waitFor(() => {
      fireEvent.click(button);
      Object.values(result.current.errorDataFormLogin).forEach(errorList => {
        expect(errorList).toEqual([]);
      });
    });
  });
});
