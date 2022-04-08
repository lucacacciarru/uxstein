import { render } from '../../_shared/testConfig/customRender';
import { Profile } from './Profile';

describe('Profile page', () => {
  test('Should be rendered', () => {
    render(<Profile />);
  });
});
