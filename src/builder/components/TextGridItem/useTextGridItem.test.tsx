import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { AttributesModel, SingleItemAttribute } from '../../store/types';
import { useTextGridItem } from './useTextGridItem';

describe('useTextGridItem', () => {
  test('should return matching values if pass an Attribute object with defined values', () => {
    const { result } = renderHook(() =>
      useTextGridItem(MOCK_ATTRIBUTES_DEFINED_VALUES),
    );

    expect(result.current.titleValue).toBe(
      MOCK_ATTRIBUTES_DEFINED_VALUES.title?.value,
    );
    expect(result.current.subtitleValue).toBe(
      MOCK_ATTRIBUTES_DEFINED_VALUES.subtitle?.value,
    );
  });

  test('should return the initial value if pass an Attribute object with undefined values, and defined initalValue', () => {
    const { result } = renderHook(() =>
      useTextGridItem(MOCK_ATTRIBUTES_UNDEFINED_VALUES),
    );

    expect(result.current.titleValue).not.toBe(
      MOCK_ATTRIBUTES_UNDEFINED_VALUES.title?.value,
    );
    expect(result.current.subtitleValue).not.toBe(
      MOCK_ATTRIBUTES_UNDEFINED_VALUES.subtitle?.value,
    );
  });
});

const MOCK_ATTRIBUTES_DEFINED_VALUES: AttributesModel = {
  title: {
    value: 'Any defined title value',
    label: 'builder.toolBar.attributes.default.label',
    placeholder: 'builder.toolBar.attributes.default.placeholder',
    initialValue: 'builder.toolBar.attributes.default.placeholder',
    style: {},
  },
  subtitle: {
    value: 'Any defined subtitle value',
    label: 'builder.toolBar.attributes.default.label',
    placeholder: 'builder.toolBar.attributes.default.placeholder',
    initialValue: 'builder.toolBar.attributes.default.placeholder',
    style: {},
  },
};
const MOCK_ATTRIBUTES_UNDEFINED_VALUES: AttributesModel = {
  title: {
    ...(MOCK_ATTRIBUTES_DEFINED_VALUES.title as SingleItemAttribute),
    value: '',
  },
  subtitle: {
    ...(MOCK_ATTRIBUTES_DEFINED_VALUES.subtitle as SingleItemAttribute),
    value: '',
  },
};
