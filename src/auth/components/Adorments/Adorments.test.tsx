import {
  render,
  screen,
  waitFor,
} from '../../../_shared/testConfig/customRender';
import { Adorments } from './Adorments';
import userEvent from '@testing-library/user-event';
import { adormentList } from './adormentList';

describe('Adorments component', () => {
  test('should be rendered', () => {
    render(<Adorments items={adormentList} />);
    const allAdorments = screen.getAllByRole('adorment');
    expect(allAdorments).toHaveLength(adormentList.length);
  });

  test('should if tooltips are visible', () => {
    render(<Adorments items={adormentList} />);
    const adorments = screen.getAllByRole('adorment');
    adorments.forEach(async (item, i) => {
      userEvent.hover(item);
      await waitFor(() => {
        const tooltip = screen.getByTestId(`tooltip${i}`);
        expect(tooltip).toBeInTheDocument();
      });
    });
  });
});
