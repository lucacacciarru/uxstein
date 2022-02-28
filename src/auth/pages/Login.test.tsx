import { Login } from './Login';
import { render } from '../../_shared/testConfig/customRender';

describe('Login component', () => {
  test('Should be rendered', () => {
    render(<Login />);
  });
});
