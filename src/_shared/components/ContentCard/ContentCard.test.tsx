import { render } from '../../testConfig/customRender';
import { ContentCard } from './ContentCard';

const MOCK_PROPS = {
  src: 'anySrc',
  title: 'anyTitle',
};

describe('PersonaTemplateContentCard', () => {
  test('Should be rendered', () => {
    render(<ContentCard {...MOCK_PROPS} />);
  });
});
