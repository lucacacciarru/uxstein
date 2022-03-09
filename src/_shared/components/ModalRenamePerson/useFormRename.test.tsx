import { render, screen, fireEvent } from '../../testConfig/customRender';
import { renderHook } from '../../testConfig/customRenderHook';
import { useFormRename } from './useFormRename';
import { Input } from '@chakra-ui/react';

describe('useFormRename', () => {
  test('onChange should be called if write in input', () => {
    const { result } = renderHook(() => useFormRename());
    render(
      <Input
        value={result.current.nameValue}
        onChange={result.current.onChangeInputRename}
        data-testid="input"
      />,
    );
    const testValue = 'mail@mail.com';
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: testValue } });
    expect(result.current.nameValue).toBe(testValue);
  });
  test('if the text is longer than 20 characters, inputRrror shuld be true', () => {
    const { result } = renderHook(() => useFormRename());
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
            result.current.checkAndConfirmRename('1', () => {});
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
  test('if the text is empty, inputRrror shuld be true', () => {
    const { result } = renderHook(() => useFormRename());
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
            result.current.checkAndConfirmRename('1', () => {});
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
    const { result } = renderHook(() => useFormRename(), {
      mocks: {
        persona: {
          data: {
            allIds: ['1'],
            byId: {
              '1': {
                id: '1',
                src: 'anySrc',
                title: 'anyTitle',
                createdAt: 0,
                updatedAt: 0,
              },
            },
          },
        },
      },
    });
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
            result.current.checkAndConfirmRename('1', fn);
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
