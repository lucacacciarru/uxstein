import { render } from '../../../_shared/testConfig/customRender';
import { ExampleCard } from './ExampleCard';

describe('ExampleCard component', () => {
  test('Should be rendered', () => {
    render(<ExampleCard src="anySrc" />);
  });
});
