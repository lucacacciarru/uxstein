import { FormControl, Input } from '@chakra-ui/react';
import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import {
  renderHook,
  waitFor,
} from '../../../_shared/testConfig/customRenderHook';
import { useUsernameProfileInput } from './useUsernameProfileInput';

const notValidValue = '';
const validValue = 'test';

describe('useUsernameProfileInput hook', () => {
  test('if inputValue.username is empty and onSubmit is called, inputError should be true', () => {
    const { result } = renderHook(() => useUsernameProfileInput());
    render(
      <FormControl data-testid="form" onSubmit={result.current.onSubmit}>
        <Input
          data-testid="usernameInput"
          name="username"
          value={result.current.inputValue.username || ''}
          onChange={result.current.onChange}
        />
      </FormControl>,
    );
    const form = screen.getByTestId('form');
    const input = screen.getByTestId('usernameInput');
    fireEvent.change(input, { target: { value: notValidValue } });
    fireEvent.submit(form);
    expect(result.current.inputError).toBeTruthy();
  });
  test('if inputValue.username is valid, inputError should be false', async () => {
    const { result } = renderHook(() => useUsernameProfileInput());
    render(
      <FormControl data-testid="form" onSubmit={result.current.onSubmit}>
        <Input
          data-testid="usernameInput"
          name="username"
          value={result.current.inputValue.username || ''}
          onChange={result.current.onChange}
        />
      </FormControl>,
    );
    const form = screen.getByTestId('form');
    const input = screen.getByTestId('usernameInput');
    fireEvent.change(input, { target: { value: validValue } });
    fireEvent.submit(form);
    waitFor(() => {
      expect(result.current.inputError).toBeFalsy();
    });
  });
});
