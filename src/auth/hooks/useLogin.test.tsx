// TODO: need to test logic for navigate user to the path requested before login
import { renderHook } from '../../_shared/testConfig/customRenderHook';
import { useLogin } from '.';
import { LoginFormData } from '../components';
import {
  render,
  fireEvent,
  screen,
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
});
