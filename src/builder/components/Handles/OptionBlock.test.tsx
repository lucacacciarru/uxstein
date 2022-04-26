import { render } from '../../../_shared/testConfig/customRender';
import { OptionBlock } from './OptionBlock';

describe('DeleteButton component', () => {
  test('should be renderd', () => {
    render(
      <OptionBlock backgroundColor="anyColor" iconColor="anyColor" id="1" />,
    );
  });
});
