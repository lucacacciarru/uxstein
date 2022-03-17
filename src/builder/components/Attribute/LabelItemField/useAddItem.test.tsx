import {
  render,
  renderHook,
  screen,
  fireEvent,
  act,
} from '../../../../_shared/testConfig/customRenderHook';
import { useAddItem } from './useAddItem';

const fn = jest.fn();

describe('useAddItem hook', () => {
  test('initial states should be false', () => {
    const { result } = renderHook(() =>
      useAddItem(fn, { placeholder: 'test' }),
    );
    const stateList = [
      result.current.textLabel,
      result.current.inputError,
      result.current.errorMessage,
    ];
    stateList.forEach(state => {
      expect(state).toBeFalsy();
    });
  });

  test('should change textLabel when onChange is called', () => {
    const { result } = renderHook(() =>
      useAddItem(fn, { placeholder: 'test' }),
    );
    render(
      <input
        data-testid="inputTextLabel"
        value={result.current.textLabel}
        onChange={result.current.onChange}
      />,
    );
    const inputLabel = screen.getByTestId('inputTextLabel');
    fireEvent.change(inputLabel, { target: { value: 'test' } });
    expect(result.current.textLabel).toBe('test');
  });

  test('if textLabel is too long, inputError and ErrorMessage should be truthy', () => {
    const { result } = renderHook(() =>
      useAddItem(fn, { placeholder: 'test' }),
    );
    render(
      <input
        data-testid="inputTextLabel"
        value={result.current.textLabel}
        onChange={result.current.onChange}
      />,
    );
    const inputLabel = screen.getByTestId('inputTextLabel');
    fireEvent.change(inputLabel, {
      target: { value: 'string long enough to be longer than 15 characters' },
    });
    act(() => {
      result.current.checkAndAddItem();
    });
    expect(result.current.inputError).toBeTruthy();
    expect(result.current.errorMessage).toBeTruthy();
  });
  test('if textLabel is empty, inputError and ErrorMessage should be truthy', () => {
    const { result } = renderHook(() =>
      useAddItem(fn, { placeholder: 'test' }),
    );
    render(
      <input
        data-testid="inputTextLabel"
        value={result.current.textLabel}
        onChange={result.current.onChange}
      />,
    );
    const inputLabel = screen.getByTestId('inputTextLabel');
    fireEvent.change(inputLabel, {
      target: { value: '' },
    });
    act(() => {
      result.current.checkAndAddItem();
    });
    expect(result.current.inputError).toBeTruthy();
    expect(result.current.errorMessage).toBeTruthy();
  });
  test('if textLabel is correct, inputError and ErrorMessage should be falsy and add function should be call', () => {
    const { result } = renderHook(() =>
      useAddItem(fn, { placeholder: 'test' }),
    );
    render(
      <input
        data-testid="inputTextLabel"
        value={result.current.textLabel}
        onChange={result.current.onChange}
      />,
    );
    const inputLabel = screen.getByTestId('inputTextLabel');
    fireEvent.change(inputLabel, {
      target: { value: 'Test' },
    });
    act(() => {
      result.current.checkAndAddItem();
    });
    expect(result.current.inputError).toBeFalsy();
    expect(result.current.errorMessage).toBeFalsy();
    expect(fn).toBeCalled();
  });
});
