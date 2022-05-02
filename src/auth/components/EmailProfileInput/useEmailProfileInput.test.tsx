import { FormControl, Input } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '../../../_shared/testConfig/customRender';
import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { AuthState } from '../../store';
import { getUserProfile } from '../../store/selectors';
import { useEmailProfileInput } from './useEmailProfileInput';

const anyValue = 'Any value';
const notValidValue = 'Not valid email';
const validEmail = 'test@mail.com';
const registeredEmail = 'test@test.com';

const useMockHook = () => {
  const { onChange, inputValue, onSubmit, inputError } = useEmailProfileInput();
  const emailUser = useSelector(getUserProfile)?.email;

  return {
    onChange,
    inputValue,
    onSubmit,
    emailUser,
    inputError,
  };
};

const authMock: AuthState = {
  profile: {
    id: 'anyId',
    email: registeredEmail,
    password: 'anyPassword',
    username: 'test',
  },
};

describe('useEmailProfileInput hook', () => {
  test('if onChange is called, inputValue should be change', () => {
    const { result } = renderHook(() => useEmailProfileInput());
    render(
      <Input
        data-testid="emailInput"
        name="email"
        value={result.current.inputValue.email || ''}
        onChange={result.current.onChange}
      />,
    );
    const input = screen.getByTestId('emailInput');
    fireEvent.change(input, { target: { value: anyValue } });
    expect(result.current.inputValue.email).toEqual(anyValue);
  });

  test('if inputValue.email is not a email and onSubmit is called, inputError should be true', () => {
    const { result } = renderHook(() => useEmailProfileInput());
    render(
      <FormControl data-testid="form" onSubmit={result.current.onSubmit}>
        <Input
          data-testid="emailInput"
          name="email"
          value={result.current.inputValue.email || ''}
          onChange={result.current.onChange}
        />
      </FormControl>,
    );
    const form = screen.getByTestId('form');
    const input = screen.getByTestId('emailInput');
    fireEvent.change(input, { target: { value: notValidValue } });
    fireEvent.submit(form);
    expect(result.current.inputError).toBeTruthy();
  });

  test('if inputValue.email is equal to logged user email and onSubmit is called, inputError should be true', () => {
    const { result } = renderHook(() => useEmailProfileInput(), {
      mocks: { auth: authMock },
    });
    render(
      <FormControl data-testid="form" onSubmit={result.current.onSubmit}>
        <Input
          data-testid="emailInput"
          name="email"
          value={result.current.inputValue.email || ''}
          onChange={result.current.onChange}
        />
      </FormControl>,
    );
    const form = screen.getByTestId('form');
    const input = screen.getByTestId('emailInput');
    fireEvent.change(input, { target: { value: registeredEmail } });
    fireEvent.submit(form);
    expect(result.current.inputError).toBeTruthy();
  });
  test('if inputValue.email is right, inputError should be false and the user email should change ', async () => {
    const { result } = renderHook(() => useMockHook(), {
      mocks: { auth: authMock },
    });
    render(
      <FormControl
        as="form"
        data-testid="form"
        onSubmit={e => result.current.onSubmit(e)}
      >
        <Input
          data-testid="emailInput"
          name="email"
          value={result.current.inputValue.email || ''}
          onChange={result.current.onChange}
        />
      </FormControl>,
    );
    const form = screen.getByTestId('form');
    const input = screen.getByTestId('emailInput');
    fireEvent.change(input, { target: { value: validEmail } });
    fireEvent.submit(form);
    await waitFor(() => {
      expect(result.current.emailUser).toEqual(validEmail);
      expect(result.current.inputValue.email).toEqual('');
      expect(result.current.inputError).toBeFalsy();
    });
  });
});
