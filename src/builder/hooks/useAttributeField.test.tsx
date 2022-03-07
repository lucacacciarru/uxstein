import { renderHook } from '../../_shared/testConfig/customRenderHook';
import { SingleItemAttribute } from '../store/types';
import { useAttributeField } from './useAttributeField';

const MOCK_ATTRIBUTE: SingleItemAttribute = {
  label: 'app.toolBar.attributes.title.label',
  placeholder: 'app.toolBar.attributes.title.placeholder',
  value: '',
  style: {},
};

describe('useAttributeField', () => {
  test('should return defined values if pass a defined attribute object', () => {
    const { result } = renderHook(() => useAttributeField(MOCK_ATTRIBUTE));

    expect(result.current.label).toBeDefined();
    expect(result.current.placeholder).toBeDefined();
  });

  test('should not return undefined values even if call with undefined value', () => {
    const { result } = renderHook(() => useAttributeField());

    expect(result.current.label).not.toBeUndefined();
    expect(result.current.placeholder).not.toBeUndefined();
  });
});
