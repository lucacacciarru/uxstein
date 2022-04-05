import { render, screen } from '../../../_shared/testConfig/customRender';
import { AvatarTemplate } from './AvatarTemplate';

describe('AvatarTemplate component', () => {
  test('If default is false and user is logged, AvatarTemplate should be render a image', () => {
    render(<AvatarTemplate isDefault={false} />, {
      mocks: {
        auth: {
          profile: {
            email: 'anyEmail',
            password: 'anyPassword',
            username: 'Test',
          },
        },
      },
    });
    const nameUserImage = screen.getByRole('img');
    expect(nameUserImage).toBeInTheDocument();
  });

  test('If isDefault is true, the icon should be visible', () => {
    render(<AvatarTemplate isDefault={true} />);
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });
});
