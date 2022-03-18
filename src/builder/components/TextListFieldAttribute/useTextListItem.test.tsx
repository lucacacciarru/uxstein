import {
  render,
  fireEvent,
  screen,
} from '../../../_shared/testConfig/customRender';
import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { useTextListItem } from './useTextListItem';

const ITEM_ID = 'anyItemId';

describe('useTextListItem hook', () => {
  test('should change label if handleOnChangeLabel is fired', () => {
    const onChangeLabel = jest.fn();
    const deleteItem = jest.fn();

    const { result } = renderHook(() =>
      useTextListItem({
        onChangeLabel,
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

  test('should call deleteItem if click on delete button', () => {
    const onChangeLabel = jest.fn();
    const deleteItem = jest.fn();
    const { result } = renderHook(() =>
      useTextListItem({
        onChangeLabel,
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
