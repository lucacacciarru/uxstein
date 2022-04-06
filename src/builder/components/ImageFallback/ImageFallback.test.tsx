import { render } from '../../../_shared/testConfig/customRender';
import { ImageFallback } from './ImageFallback';

describe('ImageFallback', () => {
  test('should render correctly', () => {
    render(<ImageFallback />);
  });

  test('should render correctly with a custom icon override', () => {
    render(<ImageFallback iconName="AddCircle"/>);
  });
});
