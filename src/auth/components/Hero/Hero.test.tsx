import { render } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero component', () => {
  test('Should be rendered', () => {
    render(<Hero />);
  });
});
