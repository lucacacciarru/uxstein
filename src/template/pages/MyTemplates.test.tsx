import { render } from '../../_shared/testConfig/customRender';
import { MyTemplates } from './MyTemplates';
describe('MyTemplates component', () => {
  test('Should be rendered', () => {
    render(<MyTemplates />);
  });
});
