import { render, screen } from '../../testConfig/customRender';
import { Card } from './Card';

describe('Card component', () => {
  test('should be rendered', () => {
    render(<Card lastEdit="test" title="test" src="test" type="persona" />);
    const card = screen.getByRole('Card');
    expect(card).toBeInTheDocument();
  });
  test('should show avatar if type is "template"', () => {
    render(
      <Card
        lastEdit="test"
        title="test"
        src="test"
        type="template"
        author="default"
      />,
    );
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toBeInTheDocument();
  });
  test('should show name icon avatar if type is "template" and author is not "default"', () => {
    render(
      <Card
        lastEdit="test"
        title="test"
        src="test"
        type="template"
        author="test"
      />,
    );
  });
});
