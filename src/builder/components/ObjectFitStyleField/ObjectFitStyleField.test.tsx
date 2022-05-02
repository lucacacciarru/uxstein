import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import { BuilderState } from '../../store/types';
import { ObjectFitStyleField } from './ObjectFitStyleField';

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
      style: {
        objectFit: 'contain',
      },
      type: 'image',
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
};

describe('ObjectFitStyleField', () => {
  test('should render correctly', () => {
    render(
      <ObjectFitStyleField
        attributeName="image"
        blockItemId="existingId"
        styleKey="objectFit"
        styleValue="cover"
      />,
      { mocks: { builder: MOCK_BUILDER_STATE } },
    );
    const buttonCover = screen.getByTestId('buttonCover');
    const buttonContain = screen.getByTestId('buttonContain');

    fireEvent.click(buttonContain);
    fireEvent.click(buttonCover);
  });
});
