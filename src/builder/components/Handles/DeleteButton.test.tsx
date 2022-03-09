import { render } from '../../../_shared/testConfig/customRender';
import { DeleteButton } from './DeleteButton';

describe('DeleteButton component', () => {
  test('should be renderd', () => {
    render(<DeleteButton color="anyColor" id="1" />);
  });
});
