import { render, screen } from '../../../_shared/testConfig/customRender';
import { PersonaCard } from './PersonaCard';

describe('Card component', () => {
  test('should be rendered', () => {
    render(
      <PersonaCard
        id="anyid"
        updatedAt={0}
        createdAt={0}
        src="test"
        title="test"
        type="persona"
        builderData={{ gridItems: {}, pageSettings: [] }}
      />,
    );
    const card = screen.getByRole('card');
    expect(card).toBeInTheDocument();
  });
  test('should show avatar with icon if type is "template"', () => {
    render(
      <PersonaCard
        id="anyid"
        updatedAt={0}
        createdAt={0}
        src="test"
        title="test"
        type="template"
        builderData={{ gridItems: {}, pageSettings: [] }}
      />,
    );
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toBeInTheDocument();
  });
});
