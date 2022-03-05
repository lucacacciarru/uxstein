import { renderHook } from '../../_shared/testConfig/customRenderHook';
import { useSignup } from '.';
import { SignupFormData } from '../components';
import {
  render,
  fireEvent,
  screen,
} from '../../_shared/testConfig/customRender';

describe('useSignup', () => {
  test('dataFormSignup by default should have empty values', () => {
    const { result } = renderHook(() => useSignup());

    const expected: SignupFormData = {
      email: '',
      password: '',
      confirmPassword: '',
    };

    expect(result.current.dataFormSignup).toEqual(expected);
  });

  test('dataFormSignup should match if call hadleSignupInput on email field', async () => {
    const { result } = renderHook(() => useSignup());

    const expected: SignupFormData = {
      email: 'mail@mail.com',
      password: '',
      confirmPassword: '',
    };

    render(
      <input
        onChange={result.current.handleSignupInput}
        value={result.current.dataFormSignup.email}
        data-testid="email-input"
        name="email"
      />,
    );
    const input = screen.getByTestId('email-input');
    fireEvent.change(input, { target: { value: 'mail@mail.com' } });

    expect(result.current.dataFormSignup).toEqual(expected);
  });

  test('dataFormSignup should match if call hadleSignupInput on password field', () => {
    const { result } = renderHook(() => useSignup());

    const expected: SignupFormData = {
      email: '',
      password: 'aaa',
      confirmPassword: '',
    };

    render(
      <input
        onChange={result.current.handleSignupInput}
        value={result.current.dataFormSignup.password}
        data-testid="password-input"
        name="password"
      />,
    );

    const password = screen.getByTestId('password-input');
    fireEvent.change(password, { target: { value: 'aaa' } });

    expect(result.current.dataFormSignup).toEqual(expected);
  });

  test('errorDataFormSignup should have errors inside array if field conditions are not satisfied', () => {
    const { result } = renderHook(() => useSignup());

    render(
      <form onSubmit={() => result.current.signup()}>
        <input
          onChange={result.current.handleSignupInput}
          value={result.current.dataFormSignup.password}
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

    Object.values(result.current.errorDataFormSignup).forEach(errorList => {
      expect(errorList.length).not.toEqual(0);
    });
  });
});
