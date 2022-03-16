import { render } from '../../../_shared/testConfig/customRender';
import { BuilderState } from '../../store/types';
import { CheckboxFieldAttribute } from './CheckboxFieldAttribute';

const BLOCK_ID = 'anyBlockId';
const ITEM_ID = 'anyItemId';
const ATTRIBUTE_NAME = 'checkbox';

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: [BLOCK_ID],
  byId: {
    [BLOCK_ID]: {
      attributes: {
        [ATTRIBUTE_NAME]: {
          initialValue: [{ id: ITEM_ID, value: 'checked', label: 'anyLabel' }],
          items: [{ id: ITEM_ID, value: 'checked', label: 'anyLabel' }],
          label: 'builder.toolBar.attributes.items.label',
          placeholder: 'builder.toolBar.attributes.items.placeholder',
          style: {},
        },
      },
      style: {},
      type: ATTRIBUTE_NAME,
    },
  },
  pageSettings: [],
};

describe('CheckboxFieldAttribute', () => {
  test('should render correctly', () => {
    render(
      <CheckboxFieldAttribute blockItemId={BLOCK_ID} name={ATTRIBUTE_NAME} />,
      { mocks: { builder: MOCK_BUILDER_STATE } },
    );
  });
});
