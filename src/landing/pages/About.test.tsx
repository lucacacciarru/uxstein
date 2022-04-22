import { render } from '../../_shared/testConfig/customRender';
import { About } from './About';

describe('About', () => {
  test('should render correctly', () => {
    render(<About />);
  });
});
