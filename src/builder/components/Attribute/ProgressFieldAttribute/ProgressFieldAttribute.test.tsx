import { render } from '../../../../_shared/testConfig/customRender';
import { ProgressFieldAttribute } from './ProgressFieldAttribute';

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
          personaId: 'any id',
          title: 'any title',
        },
      },
    });
  });
});
