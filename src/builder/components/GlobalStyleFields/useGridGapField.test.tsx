import { useSelector } from 'react-redux';
import {
  renderHook,
  waitFor,
  act,
} from '../../../_shared/testConfig/customRenderHook';
import { getGlobalStyle } from '../../store/selectors/getGlobalStyle';
import { useGridGapField } from './useGridGapField';

const useTestHook = (styleKey: 'rowGap' | 'columnGap') => {
  const { select, selected, sizes } = useGridGapField(styleKey);

  const globalStyles = useSelector(getGlobalStyle);
  const storeValue = globalStyles[styleKey];

  return {
    storeValue,
    select,
    selected,
    sizes,
  };
};

describe('useGridGapField', () => {
  test('should change the rowGap prop in the store as expected', async () => {
    const { result } = renderHook(() => useTestHook('rowGap'));

    const NEW_SIZE = 's';

    act(() => {
      result.current.select(NEW_SIZE);
    });

    await waitFor(() => {
      expect(result.current.selected).toBe(NEW_SIZE);
      expect(result.current.storeValue).toBe(result.current.sizes[NEW_SIZE]);
    });
  });

  test('should change the columnGap prop in the store as expected', async () => {
    const { result } = renderHook(() => useTestHook('columnGap'));

    const NEW_SIZE = 's';

    act(() => {
      result.current.select(NEW_SIZE);
    });

    await waitFor(() => {
      expect(result.current.selected).toBe(NEW_SIZE);
      expect(result.current.storeValue).toBe(result.current.sizes[NEW_SIZE]);
    });
  });
});
