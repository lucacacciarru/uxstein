import { render } from '../../../_shared/testConfig/customRender';
import { TextListFieldAttribute } from './TextListFieldAttribute';

describe('TextListFieldAttribute component', () => {
  test('Should be rendered', () => {
    render(<TextListFieldAttribute blockItemId="1" name="text-list" />, {
      mocks: {
        builder: {
          allIds: ['1'],
          byId: {
            '1': {
              attributes: {
                title: {
                  initialValue: [{ id: 'test', value: 'test', label: '' }],
                  items: [{ id: 'test', value: 'test', label: '' }],
                  label: 'auth.form.textForSignup',
                  placeholder: 'auth.form.buttonLogin',
                  style: {},
                },
                'text-list': {
                  initialValue: [{ id: 'test', value: 'test', label: '' }],
                  items: [{ id: 'test', value: 'test', label: '' }],
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
