import {
    queries,
    Queries,
    RenderOptions,
} from '@testing-library/react';
import { INITIAL_STATE } from './customRender';

export type CustomRenderOptions<
    Q extends Queries = typeof queries,
    Container extends Element | DocumentFragment = HTMLElement,
    > = RenderOptions<Q, Container> & {
        mocks?: typeof INITIAL_STATE;
        initialRoutes?: string[];
    };

