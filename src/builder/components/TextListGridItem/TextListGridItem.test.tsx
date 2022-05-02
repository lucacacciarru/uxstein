import { render } from '../../../_shared/testConfig/customRender';
import { TextListGridItem } from './TextListGridItem';

describe('TextListGridItem component', () => {
  test('should be rendered', () => {
    render(
      <TextListGridItem
        attributes={{
          'text-list': {
            items: [{ id: 'test', value: '20' }],
            initialValue: [{ id: 'test', value: '20' }],
            label: 'auth.form.buttonLogin',
            placeholder: 'auth.form.buttonLogin',
            style: {},
          },
        }}
      />,
    );
  });
});
