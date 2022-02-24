import {
  fireEvent,
  render,
  screen,
} from '../../../_shared/testConfig/customRender';
import { AuthField } from './AuthField';

describe('FieldAuth component', () => {
  test('onChange should be called when typing', () => {
    const onChange = jest.fn();
    render(<AuthField onChange={onChange} name="email" value="" />);
    const Field = screen.getByRole('input');
    fireEvent.change(Field, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalled();
  });

  test('Should change type when passing "email" to the input', () => {
    const onChange = jest.fn();
    render(<AuthField onChange={onChange} name="email" value="" />);
    const field = screen.getByRole('input');
    expect(field).toHaveAttribute('type', 'email');
  });
  test('Should change type when passing "password" or "confirmPassword" to the input', () => {
    const onChange = jest.fn();

    render(
      <>
        <AuthField onChange={onChange} name={'password'} value="" />
        <AuthField onChange={onChange} name={'confirmPassword'} value="" />{' '}
      </>,
    );
    screen.getAllByRole('input').forEach(item => {
      expect(item).toHaveAttribute('type', 'password');
    });
  });
  test('Should change type "password" to "text" when click on button', () => {
    const onChange = jest.fn();

    render(<AuthField onChange={onChange} name={'password'} value="" />);
    const buttonShowPassword = screen.getByRole('button');
    const field = screen.getByRole('input');
    fireEvent.click(buttonShowPassword);
    expect(field).toHaveAttribute('type', 'text');
  });
});
