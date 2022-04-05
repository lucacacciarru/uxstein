import { render } from '../../../_shared/testConfig/customRender';
import { TemplateCard } from './TemplateCard';

describe('TemplateCard', () => {
  test('should render correctly', () => {
    render(
      <TemplateCard
        builderData={{ gridItems: {}, pageSettings: [] }}
        id=""
        isDefault={false}
        name="any string"
        src="any url"
      />,
    );
  });
});
