import { GenericSkeletonList } from '..';
import { render } from '../../testConfig/customRender';

describe('GenericSkeletonList component', () => {
  test('Should be rendered', () => {
    render(<GenericSkeletonList numberOfItems={5} />);
  });
});
