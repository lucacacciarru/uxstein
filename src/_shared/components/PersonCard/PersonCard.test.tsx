import { render, screen } from '../../testConfig/customRender';
import { PersonCard } from './PersonCard';

describe('Card component', () => {
  test('should be rendered', () => {
    render(
      <PersonCard
        updatedAt={0}
        createdAt={0}
        src="test"
        title="test"
        type="persona"
      />,
    );
    const card = screen.getByRole('card');
    expect(card).toBeInTheDocument();
  });
  test('should show avatar with icon if type is "template"', () => {
    render(
      <PersonCard
        updatedAt={0}
        createdAt={0}
        src="test"
        title="test"
        type="template"
      />,
    );
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toBeInTheDocument();
  });
});
