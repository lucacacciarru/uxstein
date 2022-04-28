import { render } from '../../../../_shared/testConfig/customRender';
import { ProgressFieldAttribute } from './ProgressFieldAttribute';

// TODO - Received NaN for the `value` attribute. If this is expected, cast the value to a string.
describe('ProgressFieldAttribute component', () => {
  test('Should be rendered', () => {
    render(<ProgressFieldAttribute blockItemId="1" name="title" />, {
      mocks: {
        builder: {
          allIds: ['1'],
          byId: {
            '1': {
              attributes: {
                title: {
                  initialValue: [{ id: 'test', value: 'test' }],
                  items: [{ id: 'test', value: 'test' }],
                  label: 'auth.form.textForSignup',
                  placeholder: 'auth.form.buttonLogin',
                  style: {},
                },
              },
              style: {},
              type: 'text',
            },
          },
          pageSettings: [],
          entityId: 'any id',
          entityType: 'persona',
          title: 'any title',
          globalStyle: {
            backgroundColor: '',
            columnGap: 0,
            rowGap: 0,
          },
        },
      },
    });
  });
});
