import { render } from '../../../_shared/testConfig/customRender';
import { RateItemList } from './RateItemList';

describe('RateItemList', () => {
  test('should be rendered', () => {
    render(<RateItemList color="#fafafa" value="3" />);
  });
});
