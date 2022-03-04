import {
    queries,
    Queries,
    RenderOptions,
} from '@testing-library/react';
import { RenderHookOptions } from '@testing-library/react-hooks/lib/types';
import { INITIAL_STATE } from './customRender';

export type CustomRenderOptions<
    Q extends Queries = typeof queries,
    Container extends Element | DocumentFragment = HTMLElement,
    > = RenderOptions<Q, Container> & {
        mocks?: Partial<typeof INITIAL_STATE>;
        initialRoutes?: string[];
    };

export type CustomRenderHookOptions<T> = RenderHookOptions<T> & {
    mocks?: Partial<typeof INITIAL_STATE>;
    initialRoutes?: string[];
}