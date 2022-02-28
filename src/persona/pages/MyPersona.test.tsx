import { MyPersona } from './MyPersona';
import { render } from '../../_shared/testConfig/customRender';

describe('MyPersona component', () => {
  test('Should be rendered', () => {
    render(<MyPersona />);
  });
});
