import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import { InputModal } from './InputModal';

const onChangeCallback = jest.fn();

describe('InputModal', () => {
  test('should call onChangeValue when change input', () => {
    render(
      <InputModal
        id=""
        value=""
        deleteItem={() => {}}
        onChangeValue={onChangeCallback}
        placeholder=""
      />,
    );

    const openModal = screen.getByTestId('clickableBox');
    fireEvent.click(openModal);

    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'any new value' } });

    expect(onChangeCallback).toBeCalled();
  });
});
