import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import { BuilderState } from '../../store/types';
import { ImageFieldAttribute } from './ImageFieldAttribute';

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: ['existingId'],
  byId: {
    existingId: {
      attributes: {
        image: {
          label: 'builder.toolBar.attributes.image.label',
          placeholder: 'builder.toolBar.attributes.image.placeholder',
          items: [{ id: 'existingId', value: '' }],
          initialValue: [{ id: 'existingId', value: '' }],
          style: {},
        },
      },
      style: {},
      type: 'image',
    },
  },
  pageSettings: [],
  personaId: 'any id',
};

describe('ImageFieldAttribute', () => {
  test('should render correctly', () => {
    render(<ImageFieldAttribute blockItemId="existingId" name="image" />, {
      mocks: { builder: MOCK_BUILDER_STATE },
    });
    const openModal = screen.getByTestId('clickableBox');
    fireEvent.click(openModal);
  });
});
