import { renderHook, act } from '../../testConfig/customRenderHook';
import { usePasswordInput } from './usePasswordInput';

describe('usePasswordInput hook', () => {
  test('if handleShowPassword is called, iconName should be Hide', () => {
    const { result } = renderHook(() => usePasswordInput());
    act(() => result.current.handleShowPassword());
    expect(result.current.iconName).toBe('Hide');
  });
});
