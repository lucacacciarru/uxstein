import { render } from '../../../_shared/testConfig/customRender';
import { OptionTemplateCard } from './OptionTemplateCard';

describe('OptionTemplateCard component', () => {
  test('Should be rendered', () => {
    render(<OptionTemplateCard templateId="anyid" />);
  });
});
