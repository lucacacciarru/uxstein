import { render } from '../../../_shared/testConfig/customRender';
import { LockBlockButton } from './LockBlockButton';

describe('LockBlockButton component', () => {
  test('Should be rendered', () => {
    render(<LockBlockButton iconColor="anyColor" id="anyId" />);
  });
});
