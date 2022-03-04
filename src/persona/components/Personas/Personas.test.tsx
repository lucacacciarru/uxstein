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
          personas: [
            {
              id: '78274384',
              title: 'VLK',
              src: 'https://miro.medium.com/max/800/1*zslyy_N64PbkRflC3mOeoQ.jpeg',
              createdAt: 1,
              updatedAt: 0,
            },
          ],
        },
      },
    });
    const card = screen.getByRole('card');
    expect(card).toBeInTheDocument();
  });
});
