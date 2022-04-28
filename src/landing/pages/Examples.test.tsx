import { render } from '../../_shared/testConfig/customRender';
import { Examples } from './Examples';

describe('Examples test', () => {
  test('Should be rendered', () => {
    render(<Examples />);
  });
});
