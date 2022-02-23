import { render } from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('LoginForm component', () => {
  test('should be rendered', () => {
    render(<LoginForm />);
  });
});
