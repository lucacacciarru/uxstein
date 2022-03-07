import { NumberInput } from '../NumberInput';
import { render } from '../../testConfig/customRender';

describe('NumberInput', () => {
  test('should render correctly', () => {
    render(<NumberInput value={0} />);
  });
});
