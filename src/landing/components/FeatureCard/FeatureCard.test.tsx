import { render } from '../../../_shared/testConfig/customRender';
import { FeatureCard } from './FeatureCard';

describe('FeatureCard component', () => {
  test('should be rendered', () => {
    render(
      <FeatureCard
        title="landing.features.card.block.title"
        body="landing.features.card.block.body"
        iconName="Template"
      />,
    );
  });
});
