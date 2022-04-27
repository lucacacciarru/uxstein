import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import { BuilderState } from '../../store/types';
import { ImageListFieldAttribute } from './ImageListFieldAttribute';

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
  entityId: 'any id',
  entityType: 'persona',
  title: 'any title',
  globalStyle: {
    backgroundColor: '',
    columnGap: 0,
    rowGap: 0,
  },
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
