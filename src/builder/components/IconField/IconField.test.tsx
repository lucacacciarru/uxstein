import { render } from '../../../_shared/testConfig/customRender';
import { IconField } from './IconField';

describe('IconField component', () => {
  test('Should be render', () => {
    render(<IconField attributeName="rate" blockItemId="1" styleKey="icon" />, {
      mocks: {
        builder: {
          allIds: ['1'],
          byId: {
            '1': {
              attributes: {
                title: {
                  initialValue: [{ id: 'test', value: 'test' }],
                  items: [{ id: 'test', value: 'test' }],
                  label: 'builder.toolBar.attributes.items.label',
                  placeholder: 'builder.toolBar.attributes.default.placeholder',
                  style: {},
                },
                rate: {
                  initialValue: [{ id: 'test', value: 'test' }],
                  items: [{ id: 'test', value: '2' }],
                  label: 'builder.toolBar.attributes.items.label',
                  placeholder: 'builder.toolBar.attributes.items.placeholder',
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
