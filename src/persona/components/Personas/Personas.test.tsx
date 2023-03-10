import { Personas } from './Personas';
import { render, screen } from '../../../_shared/testConfig/customRender';

describe('Personas component', () => {
  test('Should be rendered', () => {
    render(<Personas />);
  });
  test('Card should be rendered if personas array exists in the store', () => {
    render(<Personas />, {
      mocks: {
        persona: {
          data: {
            allIds: ['1'],
            byId: {
              '1': {
                id: '1',
                src: 'https://www.susannafer.com/wordpress/wp-content/uploads/2020/10/esempio-personas-template-11.png',
                title: 'Test',
                createdAt: 0,
                updatedAt: 0,
                builderData: {
                  pageSettings: [],
                  gridItems: {},
                  globalStyle: {
                    backgroundColor: '#000000',
                    columnGap: 0,
                    rowGap: 0,
                    containerPaddingX: 0,
                    containerPaddingY: 0,
                  },
                },
              },
            },
          },
        },
      },
    });

    const card = screen.getByRole('card');
    expect(card).toBeInTheDocument();

    const newPersonaLink = screen.getByTestId('new-entity-link');
    expect(newPersonaLink).toBeInTheDocument();
  });
});
