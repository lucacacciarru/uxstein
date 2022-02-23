import { render } from '@testing-library/react';
import { HeroImages } from './HeroImages';

describe('HeroImages component', () => {
  test('should be rendered', () => {
    render(<HeroImages />);
  });
});
