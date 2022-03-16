import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { useCheckboxItem } from './useCheckboxItem';
const ITEM_ID = 'anyItemId';
describe('useCheckboxItem', () => {
  test('should return isChecked = true if value is defined', () => {
    const onChangeLabel = jest.fn();
    const onChangeValue = jest.fn();
    const deleteItem = jest.fn();
    const value = 'checked';
    const { result } = renderHook(() =>
      useCheckboxItem({
        value,
        onChangeLabel,
        onChangeValue,
        deleteItem,
        id: ITEM_ID,
      }),
    );

    expect(result.current.isChecked).toBe(true);
  });

  test('should return isChecked = false if value is undefined', () => {
    const onChangeLabel = jest.fn();
    const onChangeValue = jest.fn();
    const deleteItem = jest.fn();
    const value = '';
    const { result } = renderHook(() =>
      useCheckboxItem({
        value,
        onChangeLabel,
        onChangeValue,
        deleteItem,
        id: ITEM_ID,
      }),
    );

    expect(result.current.isChecked).toBe(false);
  });

  test('should call onChangeLabel if handleOnChangeLabel is fired', () => {
    const onChangeLabel = jest.fn();
    const onChangeValue = jest.fn();
    const deleteItem = jest.fn();
    const value = '';
    const { result } = renderHook(() =>
      useCheckboxItem({
        value,
        onChangeLabel,
        onChangeValue,
        deleteItem,
        id: ITEM_ID,
      }),
    );

    render(
      <input
        value=""
        onChange={result.current.handlerOnChangeLabel}
        data-testid="input"
      />,
    );
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'new value' } });

    expect(onChangeLabel).toBeCalledWith(ITEM_ID, 'new value');
  });

  test('should call onChangeVaue if handleOnChangeValue is fired', async () => {
    const onChangeLabel = jest.fn();
    const onChangeValue = jest.fn();
    const deleteItem = jest.fn();
    const value = '';
    const { result } = renderHook(() =>
      useCheckboxItem({
        value,
        onChangeLabel,
        onChangeValue,
        deleteItem,
        id: ITEM_ID,
      }),
    );

    render(
      <input
        value={value}
        onChange={result.current.handlerOnChangeValue}
        data-testid="input"
      />,
    );
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'checked' } });

    expect(onChangeValue).toBeCalledWith(ITEM_ID, 'checked');
  });

  test('should call onChangeVaue if handleOnChangeValue is fired and value is defined', async () => {
    const onChangeLabel = jest.fn();
    const onChangeValue = jest.fn();
    const deleteItem = jest.fn();
    const value = 'checked';
    const { result } = renderHook(() =>
      useCheckboxItem({
        value,
        onChangeLabel,
        onChangeValue,
        deleteItem,
        id: ITEM_ID,
      }),
    );

    render(
      <input
        value={value}
        onChange={result.current.handlerOnChangeValue}
        data-testid="input"
      />,
    );
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: '' } });

    expect(onChangeValue).toBeCalledWith(ITEM_ID, '');
  });

  test('should call deleteItem if click on delete button', () => {
    const onChangeLabel = jest.fn();
    const onChangeValue = jest.fn();
    const deleteItem = jest.fn();
    const value = '';
    const { result } = renderHook(() =>
      useCheckboxItem({
        value,
        onChangeLabel,
        onChangeValue,
        deleteItem,
        id: ITEM_ID,
      }),
    );

    render(
      <button
        onClick={result.current.iconButtonProps.onClick}
        data-testid="button"
      />,
    );
    const button = screen.getByTestId('button');
    fireEvent.click(button);

    expect(deleteItem).toBeCalledWith(ITEM_ID);
  });
});
