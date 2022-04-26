import { render } from '../../../_shared/testConfig/customRender';
import { DeleteBlockButton } from './DeleteBlockButton';

describe('DeleteBlockButton component', () => {
  test('Should be rendered', () => {
    render(<DeleteBlockButton iconColor="anyColor" id="anyId" />);
  });
});
