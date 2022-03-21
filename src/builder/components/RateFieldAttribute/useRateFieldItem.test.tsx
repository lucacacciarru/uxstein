import { render } from '../../../_shared/testConfig/customRender';
import {
  renderHook,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRenderHook';
import { useRateFieldItem } from './useRateFieldItem';

const ITEM_ID = 'anyItemId';
const ITEM_VALUE = 'anyItemValue';

const onChangeLabel = jest.fn();
const onChangeValue = jest.fn();
const deleteItem = jest.fn();

describe('RateFieldItem hook', () => {
  test('should change label if handleOnChangeLabel is fired', () => {
    const { result } = renderHook(() =>
      useRateFieldItem({
        onChangeLabel,
        deleteItem,
        onChangeValue,
        value: ITEM_VALUE,
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

  test('should change label if handleOnChangeValue is fired', () => {
    const { result } = renderHook(() =>
      useRateFieldItem({
        onChangeLabel,
        deleteItem,
        onChangeValue,
        value: ITEM_VALUE,
        id: ITEM_ID,
      }),
    );
    render(
      <button
        onClick={e => result.current.handlerOnClickValue(e, '4')}
        data-testid="button"
      />,
    );
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(onChangeValue).toBeCalled();
  });

  test('should call deleteItem if click on deleteButton', () => {
    const onChangeLabel = jest.fn();
    const deleteItem = jest.fn();
    const { result } = renderHook(() =>
      useRateFieldItem({
        onChangeLabel,
        deleteItem,
        onChangeValue,
        value: ITEM_VALUE,
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
