import { render } from '../../../_shared/testConfig/customRender';
import { ProfileInputWrapper } from './ProfileInputWrapper';

const fn = jest.fn();

describe('ProfileInputWrapper component', () => {
  test('Should be rendered', () => {
    const profileInputWrapperProps = {
      errorMessage: 'anyString',
      inputError: false,
      onSubmit: fn,
    };
    render(<ProfileInputWrapper {...profileInputWrapperProps} />);
  });
});
