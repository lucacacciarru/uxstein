import { render } from '../../testConfig/customRender';
import { GenericToast } from './GenericToast';

describe('GenericToast component', () => {
  test('should be rendered', () => {
    render(
      <GenericToast
        translationKey="builder.toast.maxCharacters"
        status="success"
      />,
    );
  });
});
