import { renderHook } from '@testing-library/react-hooks';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../store/reducer';
import { TestWrapper } from './TestWrapper';
import { rootSaga, sagaMiddleware } from './middleware';
import { RenderHookResult, Renderer } from '@testing-library/react-hooks/lib/types';
import { CustomRenderHookOptions } from './types';

export const INITIAL_STATE = {
    auth: {},
};

export function customRenderHook<TProps, TResult>(
    callback: (props: TProps) => TResult,
    options?: CustomRenderHookOptions<TProps>
): RenderHookResult<TProps, TResult, Renderer<TProps>> {

    const state = { ...INITIAL_STATE, ...options?.mocks }; //TODO: add deep merge here

    const store = configureStore({
        reducer,
        middleware: [sagaMiddleware],
        preloadedState: state,
    });
    sagaMiddleware.run(rootSaga);

    return renderHook(callback, {
        wrapper: args =>
            TestWrapper({ ...args, store, initialRoutes: options?.initialRoutes }),
        ...options,
    })
}

export * from '@testing-library/react';
export { customRenderHook as renderHook };
