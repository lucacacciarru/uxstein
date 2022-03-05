import { queries, Queries, render, RenderResult } from '@testing-library/react';
import { TestWrapper } from './TestWrapper';
import { CustomRenderOptions } from './types';
import { getStoreForTesting } from './getStoreForTesting';

export function customRender<
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
>(
  ui: React.ReactElement,
  options?: CustomRenderOptions<Q, Container>,
): RenderResult<Q, Container> {
  const store = getStoreForTesting(options);

  return render(ui, {
    wrapper: args =>
      TestWrapper({ ...args, store, initialRoutes: options?.initialRoutes }),
    ...options,
  });
}

export * from '@testing-library/react';
export { customRender as render };
