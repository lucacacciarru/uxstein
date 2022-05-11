import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '../../../_shared/testConfig/customRender';
import { ProgressFieldItem } from './ProgressFieldItem';

const fn = jest.fn();

const props = {
  deleteItem: fn,
  id: 'test',
  label: 'test',
  value: 100,
  onChangeLabel: fn,
  onChangeValue: fn,
};

describe('NumberInputSlider component', () => {
  test('Should be rendered', () => {
    render(<ProgressFieldItem {...props} />);
  });

  test('deleteItem should be called on click deleteButton', () => {
    render(<ProgressFieldItem {...props} />);
    const deleteButton = screen.getByTestId('deleteButton');
    fireEvent.click(deleteButton);
    expect(fn).toBeCalled();
  });

  test('onChangeValue should be called on change value of NumberInput ', () => {
    render(<ProgressFieldItem {...props} />);
    const numberInput = screen.getByTestId('numberInput');
    fireEvent.change(numberInput, { target: { value: '30' } });
    expect(fn).toBeCalled();
  });

  test('onChangeLabel should be called on change value of labelInput ', async () => {
    render(<ProgressFieldItem {...props} />);
    const labelInput = screen.getByTestId('labelInput');
    fireEvent.change(labelInput, { target: { value: 'test' } });
    waitFor(() => {
      expect(fn).toBeCalled();
    });
  });
});
