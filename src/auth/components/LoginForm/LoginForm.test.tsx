import { render } from '../../../_shared/testConfig/customRender';
import { LoginForm } from './LoginForm';

describe('LoginForm component', () => {
  test('should be rendered', () => {
    render(<LoginForm />);
  });
});
