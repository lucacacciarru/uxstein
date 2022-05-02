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
        builderData={{
          gridItems: {},
          pageSettings: [],
          globalStyle: {
            backgroundColor: '#000000',
            columnGap: 0,
            rowGap: 0,
            containerPaddingX: 0,
            containerPaddingY: 0,
          },
        }}
      />,
    );
    const card = screen.getByRole('card');
    expect(card).toBeInTheDocument();
  });
});
