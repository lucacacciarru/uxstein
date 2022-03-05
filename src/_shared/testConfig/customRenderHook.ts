import { renderHook } from '@testing-library/react-hooks';
import { TestWrapper } from './TestWrapper';
import {
  Renderer,
  RenderHookResult,
} from '@testing-library/react-hooks/lib/types';
import { CustomRenderHookOptions } from './types';
import { getStoreForTesting } from './getStoreForTesting';

export function customRenderHook<TProps, TResult>(
  callback: (props: TProps) => TResult,
  options?: CustomRenderHookOptions<TProps>,
): RenderHookResult<TProps, TResult, Renderer<TProps>> {
  const store = getStoreForTesting(options);

  return renderHook(callback, {
    wrapper: args =>
      TestWrapper({ ...args, store, initialRoutes: options?.initialRoutes }),
    ...options,
  });
}

export * from '@testing-library/react';
export { customRenderHook as renderHook };
