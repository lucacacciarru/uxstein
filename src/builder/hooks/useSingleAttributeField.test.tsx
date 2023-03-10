import {
  render,
  screen,
  fireEvent,
} from '../../_shared/testConfig/customRender';
import { renderHook } from '../../_shared/testConfig/customRenderHook';
import { AttributeName, AttributesModel, BuilderState } from '../store/types';
import { useSingleAttributeField } from './useSingleAttributeField';

const EXAMPLE_ID = 'existingId';
const EXAMPLE_ATTRIBUTE_NAME: AttributeName = 'title';

const MOCK_ATTRIBUTES: AttributesModel = {
  [EXAMPLE_ATTRIBUTE_NAME]: {
    label: 'builder.toolBar.attributes.default.label',
    placeholder: 'builder.toolBar.attributes.default.placeholder',
    items: [{ id: 'anyId', value: 'anyValue' }],
    initialValue: [{ id: 'anyId', value: 'anyValue' }],
    style: {},
  },
};

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: [EXAMPLE_ID],
  byId: {
    [EXAMPLE_ID]: { attributes: MOCK_ATTRIBUTES, style: {}, type: 'text' },
  },
  pageSettings: [],
  selectedBlockId: undefined,
  entityId: 'any id',
  entityType: 'persona',
  title: 'any title',
  globalStyle: {
    backgroundColor: '#00000',
    columnGap: 0,
    rowGap: 0,
    containerPaddingX: 0,
    containerPaddingY: 0,
  },
};

describe('useAttributeField', () => {
  test('should return defined values', () => {
    const { result } = renderHook(
      () => useSingleAttributeField(EXAMPLE_ID, EXAMPLE_ATTRIBUTE_NAME),
      { mocks: { builder: MOCK_BUILDER_STATE } },
    );

    expect(result.current.label).toBeDefined();
    expect(result.current.placeholder).toBeDefined();
  });

  test('should return matching value if change it', () => {
    const { result } = renderHook(
      () => useSingleAttributeField(EXAMPLE_ID, EXAMPLE_ATTRIBUTE_NAME),
      { mocks: { builder: MOCK_BUILDER_STATE } },
    );

    render(
      <input
        value={result.current.value}
        onChange={result.current.onChange}
        data-testid="input"
      />,
    );
    const input = screen.getByTestId('input');

    fireEvent.change(input, { target: { value: 'any new value' } });

    expect(result.current.value).toBe('any new value');
  });
});
