import { render } from '../../../_shared/testConfig/customRender';
import { Hero } from './Hero';

describe('Hero component', () => {
  test('Should be rendered', () => {
    render(<Hero />);
  });
});
