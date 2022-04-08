import { ProfileForm } from '..';
import { render } from '../../../_shared/testConfig/customRender';

describe('ProfileForm component', () => {
  test('Should be rendered', () => {
    render(<ProfileForm />);
  });
});
