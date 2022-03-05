import { queries, Queries, RenderOptions } from '@testing-library/react';
import { RenderHookOptions } from '@testing-library/react-hooks/lib/types';
import { DefaultRootState } from 'react-redux';
import { ForkEffect } from 'redux-saga/effects';

export type CustomOptions = {
  mocks?: Partial<DefaultRootState>;
  initialRoutes?: string[];
  additionalSagas?: (() => Generator<ForkEffect<never>, void, unknown>)[];
};

export type CustomRenderOptions<
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
> = RenderOptions<Q, Container> & CustomOptions;

export type CustomRenderHookOptions<T> = RenderHookOptions<T> & CustomOptions;
