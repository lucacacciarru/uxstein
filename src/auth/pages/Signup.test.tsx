import { Signup } from './Signup';
import { render } from '../../_shared/testConfig/customRender';

describe('Signup component', () => {
  test('Should be rendered', () => {
    render(<Signup />);
  });
});
