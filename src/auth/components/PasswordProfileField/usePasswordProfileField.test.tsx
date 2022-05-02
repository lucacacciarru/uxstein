import { FormControl, Input } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import {
  render,
  fireEvent,
  screen,
} from '../../../_shared/testConfig/customRender';
import {
  renderHook,
  waitFor,
  act,
} from '../../../_shared/testConfig/customRenderHook';
import { AuthState } from '../../store';
import { getUserProfile } from '../../store/selectors';
import { usePasswordProfileField } from './usePasswordProfileField';

const validNewPasswordValue = 'Any value for password';
const validOldPasswordValue = 'Any value for old password';

const useMockHook = () => {
  const { onChange, inputValue, onSubmit, inputError, setInputValue } =
    usePasswordProfileField();
  const passwordUser = useSelector(getUserProfile)?.password;

  return {
    onChange,
    inputValue,
    onSubmit,
    passwordUser,
    inputError,
    setInputValue,
  };
};

const authMock: AuthState = {
  profile: {
    id: 'anyId',
    email: 'anyEmail',
    password: 'anyPassword',
    username: 'test',
  },
};

describe('usePasswordProfileField hook', () => {
  test('if newPassword and oldPassword are equal, inputError should be true', async () => {
    const { result } = renderHook(() => usePasswordProfileField());
    const { setInputValue, onSubmit } = result.current;

    act(() =>
      setInputValue(prev => ({
        ...prev,
        newPassword: validNewPasswordValue,
        oldPassword: validNewPasswordValue,
      })),
    );
    render(<FormControl onSubmit={onSubmit} data-testid="form" />);

    const form = screen.getByTestId('form');
    fireEvent.submit(form);
    expect(result.current.inputError).toBeTruthy();
  });
});

test('if onChange is called the selected value should change', async () => {
  const { result } = renderHook(() => usePasswordProfileField());
  const { onChange } = result.current;

  render(<Input onChange={onChange} name="oldPassword" data-testid="input" />);

  const input = screen.getByTestId('input');
  fireEvent.change(input, {
    target: { value: validOldPasswordValue },
  });
  expect(result.current.inputValue.oldPassword).toEqual(validOldPasswordValue);
});

test('if inputValue.oldPassword and inputValue.newPassword are correct and onSubmit is called, inputError should be false', async () => {
  const { result } = renderHook(() => useMockHook(), {
    mocks: { auth: authMock },
  });
  render(
    <FormControl
      as="form"
      data-testid="form"
      onSubmit={e => result.current.onSubmit(e)}
    />,
  );
  const form = screen.getByTestId('form');

  act(() =>
    result.current.setInputValue(prev => ({
      ...prev,
      newPassword: validNewPasswordValue,
      oldPassword: validOldPasswordValue,
    })),
  );
  fireEvent.submit(form);

  await waitFor(() => {
    expect(result.current.passwordUser).toEqual(validNewPasswordValue);
  });
});
