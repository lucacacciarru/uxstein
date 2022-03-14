import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '../../../../_shared/testConfig/customRender';
import { NumberInputSlider } from './NumberInputSlider';

const fn = jest.fn();

const prop = {
  deleteItem: fn,
  idItem: 'test',
  label: 'test',
  numberValue: 100,
  onChangeLabel: fn,
  onChangeValue: fn,
};

describe('NumberInputSlider component', () => {
  test('Should be rendered', () => {
    render(<NumberInputSlider {...prop} />);
  });

  test('deleteItem should be called if click deleteButton', () => {
    render(<NumberInputSlider {...prop} />);
    const deleteButton = screen.getByTestId('deleteButton');
    fireEvent.click(deleteButton);
    expect(fn).toBeCalled();
  });

  test('onChangeValue should be called if change value of NumberInput ', () => {
    render(<NumberInputSlider {...prop} />);
    const numberInput = screen.getByTestId('numberInput');
    fireEvent.change(numberInput, { target: { value: '30' } });
    expect(fn).toBeCalled();
  });

  test('onChangeLabel should be called if change value of labelInput ', async () => {
    render(<NumberInputSlider {...prop} />);
    const labelInput = screen.getByTestId('labelInput');
    fireEvent.change(labelInput, { target: { value: 'test' } });
    waitFor(() => {
      expect(fn).toBeCalled();
    });
  });
});

// fireEvent.change(input, { target: { value: testValue } });
