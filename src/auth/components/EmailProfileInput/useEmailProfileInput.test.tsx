import { FormControl, Input } from '@chakra-ui/react';
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '../../../_shared/testConfig/customRender';
import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { AuthState } from '../../store';
import { useEmailProfileInput } from './useEmailProfileInput';

const anyValue = 'Any value';
const notValidValue = 'Not valid email';
const validEmail = 'test@mail.com';
const registeredEmail = 'test@test.com';

const authMock: AuthState = {
  profile: {
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
  test('if inputValue.email is right, inputError should be false ', async () => {
    const { result } = renderHook(() => useEmailProfileInput(), {
      mocks: { auth: authMock },
    });
    render(
      <FormControl
        as="form"
        data-testid="form"
        onSubmit={result.current.onSubmit}
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
    waitFor(() => {
      expect(result.current.inputError).toBeFalsy();
    });
  });
});
