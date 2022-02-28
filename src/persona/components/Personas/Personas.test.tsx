import { Personas } from './Personas';
import { render } from '../../../_shared/testConfig/customRender';

describe('Personas component', () => {
  test('Should be rendered', () => {
    render(<Personas />);
  });
});
