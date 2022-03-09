import { render } from '../../../_shared/testConfig/customRender';
import { Handles } from './Handles';

describe('Handles', () => {
  test('should render correctly with undefined bg', () => {
    render(<Handles id={'anyId'} />);
  });

  test('should render correctly with defined bg', () => {
    render(<Handles id={'anyId'} bg="black" />);
  });
});
