import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import { ClickableBoxWithDelete } from './ClickableBoxWithDelete';

const clickCallback = jest.fn();
const deleteCallback = jest.fn();

describe('ClickableBoxWithDelete', () => {
  test('should not render deleteButton if deleteCallback is undefined', () => {
    render(<ClickableBoxWithDelete clickCallback={clickCallback} />);

    const deleteButton = screen.queryByTestId('deleteButton');
    expect(deleteButton).not.toBeInTheDocument();

    const container = screen.getByTestId('clickableBox');
    fireEvent.click(container);

    expect(clickCallback).toBeCalled();
  });
  test('should render deleteButton and call just deleteCallback if click on it', () => {
    render(
      <ClickableBoxWithDelete
        clickCallback={clickCallback}
        deleteCallback={deleteCallback}
      />,
    );
    const deleteButton = screen.getByTestId('deleteButton');

    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton);

    expect(clickCallback).not.toBeCalled();
    expect(deleteCallback).toBeCalled();
  });
});
