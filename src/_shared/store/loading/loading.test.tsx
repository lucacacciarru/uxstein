import { renderHook, act } from '../../testConfig/customRenderHook';
import { useLoading } from './hooks';

const TEST_KEY = 'testKey' as any;

describe('useLoading', () => {
  it('should be idle by default', () => {
    const { result } = renderHook(() => useLoading(TEST_KEY));

    expect(result.current.isIdle).toBeTruthy();
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.status).toBe('idle');
  });

  it('should be loading after calling `setLoading`', () => {
    const { result } = renderHook(() => useLoading(TEST_KEY));

    act(() => {
      result.current.setLoading();
    });

    expect(result.current.isIdle).toBeFalsy();
    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.status).toBe('loading');
  });

  it('should be idle after calling `setLoading` and then `unsetLoading`', () => {
    const { result } = renderHook(() => useLoading(TEST_KEY));

    act(() => {
      result.current.setLoading();
      result.current.unsetLoading();
    });

    expect(result.current.isIdle).toBeTruthy();
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.status).toBe('idle');
  });

  it('should still be loading after calling `setLoading` more times than `unsetLoading`', () => {
    const { result } = renderHook(() => useLoading(TEST_KEY));

    act(() => {
      result.current.setLoading();
      result.current.setLoading();
      result.current.unsetLoading();
    });

    expect(result.current.isIdle).toBeFalsy();
    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.status).toBe('loading');
  });

  it('should be loading after calling `setLoading` after `unsetLoading`', () => {
    const { result } = renderHook(() => useLoading(TEST_KEY));

    act(() => {
      /**
       * Should never decrease the internal loading less than 0
       */
      result.current.unsetLoading();
      result.current.unsetLoading();
      result.current.unsetLoading();
      result.current.setLoading();
    });

    expect(result.current.isIdle).toBeFalsy();
    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.status).toBe('loading');
  });

  it('should be idle after calling `resetLoading`', () => {
    const { result } = renderHook(() => useLoading(TEST_KEY));

    act(() => {
      result.current.setLoading();
      result.current.setLoading();
      result.current.setLoading();
      result.current.resetLoading();
    });

    expect(result.current.isIdle).toBeTruthy();
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.status).toBe('idle');
  });

  it('should be idle after calling `resetLoading` on an unset state', () => {
    const { result } = renderHook(() => useLoading(TEST_KEY));

    act(() => {
      result.current.resetLoading();
    });

    expect(result.current.isIdle).toBeTruthy();
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.status).toBe('idle');
  });
});
