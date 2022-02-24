import { render } from '../../_shared/testConfig/customRender';
import { Application } from './Application';

describe('Application page', () => {
  test('should render correctly', () => {
    render(<Application />);
  });
});
