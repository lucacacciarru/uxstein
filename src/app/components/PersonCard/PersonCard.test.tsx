import { render, screen } from '../../../_shared/testConfig/customRender';
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
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });
  test('should show the user avatar if type is "template" and author is not "default"', () => {
    const TIMESTAMP_CREATED_AT = new Date('2021/02/24').getTime();
    const TIMESTAMP_UPDATED_AT = new Date('2022/02/24').getTime();
    render(
      <PersonCard
        updatedAt={TIMESTAMP_UPDATED_AT}
        createdAt={TIMESTAMP_CREATED_AT}
        src="test"
        title="test"
        type="template"
        author="test"
      />,
    );
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toBeInTheDocument();
  });
});