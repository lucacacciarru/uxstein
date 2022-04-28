import { render } from '../../../_shared/testConfig/customRender';
import { PlaceholderGrid } from './PlaceholderGrid';

describe('GridPlaceholder component', () => {
  test('Should be rendered', () => {
    render(<PlaceholderGrid columns={2} row={2} />);
  });
});
