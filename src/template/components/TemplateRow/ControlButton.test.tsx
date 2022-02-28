import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import { ControlButton } from './ControlButton';

describe('ControlButton component', () => {
  test('if the button is clicked, it should execute the function passed as prop', () => {
    const onClick = jest.fn();
    render(
      <ControlButton direction="sx" disabled={false} setCarouselX={onClick} />,
    );
    const button = screen.getByTestId('controlButtonsx');
    fireEvent.click(button);
    expect(onClick).toBeCalled();
  });
});
