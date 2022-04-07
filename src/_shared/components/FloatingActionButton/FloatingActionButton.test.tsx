import { render } from '../../testConfig/customRender';
import { FloatingActionButton } from './FloatingActionButton';

describe('FloatingActionButton component', () => {
  test('should be rendered', () => {
    render(<FloatingActionButton iconName="Add" />);
  });


});
