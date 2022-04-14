import { FormControl, Input } from '@chakra-ui/react';
import {
  render,
  fireEvent,
  screen,
} from '../../../_shared/testConfig/customRender';
import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { usePasswordProfileField } from './usePasswordProfileField';

const validValue = 'Any value';
const notValidValue = 'not';

describe('usePasswordProfileField hook', () => {
  test('if inputValue.newPassword is less than 4 letters and onSubmit is called, inputError should be true', () => {
    const { result } = renderHook(() => usePasswordProfileField());
    render(
      <FormControl
        as="form"
        data-testid="form"
        onSubmit={e => result.current.onSubmit(e)}
      >
        <Input
          data-testid="newPasswordInput"
          name="newPassword"
          value={result.current.inputValue.newPassword || ''}
          onChange={result.current.onChange}
        />
      </FormControl>,
    );
    const form = screen.getByTestId('form');
    const input = screen.getByTestId('newPasswordInput');
    fireEvent.change(input, { target: { value: notValidValue } });
    fireEvent.submit(form);
    expect(result.current.inputError).toBeTruthy();
  });

  test('if inputValue.oldPassword and inputValue.newPassword are correct and onSubmit is called, inputError should be false', async () => {
    const { result } = renderHook(() => usePasswordProfileField());
    render(
      <FormControl
        as="form"
        data-testid="form"
        onSubmit={e => result.current.onSubmit(e)}
      >
        <Input
          data-testid="oldPasswordInput"
          name="oldPassword"
          value={result.current.inputValue.oldPassword}
          onChange={result.current.onChange}
        />
        <Input
          data-testid="newPasswordInput"
          name="newPassword"
          value={result.current.inputValue.newPassword}
          onChange={result.current.onChange}
        />
      </FormControl>,
    );
    const form = screen.getByTestId('form');
    const oldPasswordInput = screen.getByTestId('oldPasswordInput');
    const newPasswordInput = screen.getByTestId('newPasswordInput');

    fireEvent.change(oldPasswordInput, {
      target: { value: validValue },
    });
    fireEvent.change(newPasswordInput, {
      target: { value: validValue },
    });
    fireEvent.submit(form);
    expect(result.current.inputError).toBeTruthy();
  });
});
