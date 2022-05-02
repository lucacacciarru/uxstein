import { render } from '../../../_shared/testConfig/customRender';
import { RateFieldAttribute } from './RateFieldAttribute';

describe('RateFieldAttribute component', () => {
  test('should be rendered', () => {
    render(<RateFieldAttribute blockItemId="1" name="rate" />, {
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
          entityId: 'any id',
          entityType: 'persona',
          title: 'any title',
          globalStyle: {
            backgroundColor: '',
            columnGap: 0,
            rowGap: 0,
            containerPaddingX: 0,
            containerPaddingY: 0,
          },
        },
      },
    });
  });
});
