import { renderHook, act } from '../../../_shared/testConfig/customRenderHook';
import { useFaqCategoryButton } from './useFaqCategoryButton';

const EXAMPLE_CAT = 'auth';
const MATCHING_ROUTE = `/faq?category=${EXAMPLE_CAT}`;
const UNMATCHING_ROUTE = `/faq?category=other`;

describe('FaqCategoryButton', () => {
  test('should be not active by default', () => {
    const { result } = renderHook(() => useFaqCategoryButton(EXAMPLE_CAT));

    expect(result.current.isActive).toBe(false);
  });

  test('should be active if the url have a matching queryParam', () => {
    const { result } = renderHook(() => useFaqCategoryButton(EXAMPLE_CAT), {
      initialRoutes: [MATCHING_ROUTE],
    });

    expect(result.current.isActive).toBe(true);
  });

  test('should be not active if the url have an unmatching queryParam', () => {
    const { result } = renderHook(() => useFaqCategoryButton(EXAMPLE_CAT), {
      initialRoutes: [UNMATCHING_ROUTE],
    });

    expect(result.current.isActive).toBe(false);
  });

  test('should be active if fire handleClick() once', () => {
    const { result } = renderHook(() => useFaqCategoryButton(EXAMPLE_CAT));

    act(() => {
      result.current.handleClick();
    });

    expect(result.current.isActive).toBe(true);
  });

  test('should be not active if fire handleClick() twice', () => {
    const { result } = renderHook(() => useFaqCategoryButton(EXAMPLE_CAT));

    act(() => {
      result.current.handleClick();
    });

    expect(result.current.isActive).toBe(true);

    act(() => {
      result.current.handleClick();
    });

    expect(result.current.isActive).toBe(false);
  });
});
