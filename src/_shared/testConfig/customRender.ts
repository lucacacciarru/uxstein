import { queries, Queries, render, RenderResult } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../store/reducer';
import { TestWrapper } from './TestWrapper';
import { CustomRenderOptions } from './types';
import { rootSaga, sagaMiddleware } from './middleware';
import { getBlockItemSettings } from '../../app/components/AddTab/blockItemSettings';

export const INITIAL_STATE = {
    auth: {},
    persona: {},
    builder: {
        allIds: ['existingId'],
        byId: {
            existingId: getBlockItemSettings('text').gridItemSettings,
        },
        pageSettings: [{ i: 'existingId', x: 0, y: 0, w: 2, h: 2, maxW: 3 }],
        selectedBlockId: undefined,
    }
};

export function customRender<
    Q extends Queries = typeof queries,
    Container extends Element | DocumentFragment = HTMLElement,
    >(
        ui: React.ReactElement,
        options?: CustomRenderOptions<Q, Container>,
): RenderResult<Q, Container> {
    const state = { ...INITIAL_STATE, ...options?.mocks }; //TODO: add deep merge here

    const store = configureStore({
        reducer,
        middleware: [sagaMiddleware],
        preloadedState: state,
    });
    sagaMiddleware.run(rootSaga);

    return render(ui, {
        wrapper: args =>
            TestWrapper({ ...args, store, initialRoutes: options?.initialRoutes }),
        ...options,
    });
}

export * from '@testing-library/react';
export { customRender as render };
