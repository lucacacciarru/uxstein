import { render } from '@testing-library/react';
import { SignupForm } from './SignupForm';

describe('SignupForm component', () => {
  test('should be rendered', () => {
    render(<SignupForm />);
  });
});
