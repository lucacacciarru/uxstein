import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import { BuilderState } from '../../store/types';
import { ImageListFieldAttribute } from './ImageListeFieldAttribute';

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: ['existingId'],
  byId: {
    existingId: {
      attributes: {
        'image-list': {
          label: 'builder.toolBar.attributes.image.label',
          placeholder: 'builder.toolBar.attributes.image.placeholder',
          items: [{ id: 'existingId', value: '' }],
          initialValue: [{ id: 'existingId', value: '' }],
          style: {},
        },
      },
      style: {},
      type: 'image-list',
    },
  },
  pageSettings: [],
};

describe('ImageFieldAttribute', () => {
  test('should render correctly', () => {
    render(
      <ImageListFieldAttribute blockItemId="existingId" name="image-list" />,
      {
        mocks: { builder: MOCK_BUILDER_STATE },
      },
    );
  });
  test('should render correctly even if no items provided', () => {
    render(
      <ImageListFieldAttribute blockItemId="existingId" name="image-list" />,
      {
        mocks: {
          builder: {
            ...MOCK_BUILDER_STATE,
            byId: {
              existingId: {
                attributes: {
                  'image-list': {
                    label: 'builder.toolBar.attributes.image.label',
                    placeholder: 'builder.toolBar.attributes.image.placeholder',
                    items: [],
                    initialValue: [],
                    style: {},
                  },
                },
                style: {},
                type: 'image-list',
              },
            },
          },
        },
      },
    );
    const addItemClickable = screen.getByTestId('clickableBox');
    fireEvent.click(addItemClickable);
  });
});
