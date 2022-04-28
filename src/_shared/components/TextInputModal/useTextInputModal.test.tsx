import { Input } from '@chakra-ui/react';
import { render, screen, fireEvent } from '../../testConfig/customRender';
import { renderHook } from '../../testConfig/customRenderHook';
import { useTextInputModal } from './useTextInputModal';

const fn = jest.fn();
const fnOnClose = jest.fn();

describe('useTextInputModal hook', () => {
  test('if the text is longer than 20 characters, inputError should be true', () => {
    const { result } = renderHook(() =>
      useTextInputModal(fn, fnOnClose),
    );
    render(
      <>
        <Input
          value={result.current.nameValue}
          onChange={result.current.onChangeInputRename}
          data-testid="input"
        />
        <button
          data-testid="button"
          onClick={() => {
            result.current.checkAndConfirm();
          }}
        />
      </>,
    );
    const testValue =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu finibus eros. ';
    const input = screen.getByTestId('input');
    const button = screen.getByTestId('button');
    fireEvent.change(input, { target: { value: testValue } });
    fireEvent.click(button);
    expect(result.current.inputError).toBeTruthy();
  });
  test('if the text is empty, inputError should be true', () => {
    const { result } = renderHook(() =>
      useTextInputModal(fn, fnOnClose),
    );
    render(
      <>
        <Input
          value={result.current.nameValue}
          onChange={result.current.onChangeInputRename}
          data-testid="input"
        />
        <button
          data-testid="button"
          onClick={() => {
            result.current.checkAndConfirm();
          }}
        />
      </>,
    );
    const testValue = '';
    const input = screen.getByTestId('input');
    const button = screen.getByTestId('button');
    fireEvent.change(input, { target: { value: testValue } });
    fireEvent.click(button);
    expect(result.current.inputError).toBeTruthy();
  });
  test('if inputError it is false, checkAndConfirm should put inputError on false and fire callback', () => {
    const fn = jest.fn();
    const { result } = renderHook(() =>
      useTextInputModal(fn, fnOnClose),
    );
    render(
      <>
        <Input
          value={result.current.nameValue}
          onChange={result.current.onChangeInputRename}
          data-testid="input"
        />
        <button
          data-testid="button"
          onClick={() => {
            result.current.checkAndConfirm();
          }}
        />
      </>,
    );
    const testValue = 'Test';
    const input = screen.getByTestId('input');
    const button = screen.getByTestId('button');
    fireEvent.change(input, { target: { value: testValue } });
    fireEvent.click(button);
    expect(result.current.inputError).toBeFalsy();
    expect(fn).toBeCalled();
  });
});
