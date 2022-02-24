import { ErrorPage } from '.';
import { render } from '../testConfig/customRender';

describe('Error Page', () => {
  test(' shoud render correctly', () => {
    render(<ErrorPage />);
  });
});
