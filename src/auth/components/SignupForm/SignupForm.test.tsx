import { render } from '../../../_shared/testConfig/customRender';
import { SignupForm } from './SignupForm';

describe('SignupForm component', () => {
  test('should be rendered', () => {
    render(<SignupForm />);
  });
});
