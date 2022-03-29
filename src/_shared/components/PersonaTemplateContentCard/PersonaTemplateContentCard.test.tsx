import { Persona } from '../../../persona/store/types/general';
import { render } from '../../testConfig/customRender';
import { PersonaTemplateContentCard } from './PersonaTemplateContentCard';

const MOCK_PROPS: Omit<Persona, 'id' | 'builderData'> & {
  type: 'persona' | 'template';
} = {
  createdAt: 0,
  updatedAt: 0,
  src: 'anySrc',
  title: 'anyTitle',
  type: 'persona',
};

describe('PersonaTemplateContentCard', () => {
  test('Should be rendered', () => {
    render(<PersonaTemplateContentCard {...MOCK_PROPS} />);
  });
});
