import {
  queries,
  Queries,
  render,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { customTheme } from './_shared/theme';
import { FC } from 'react';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { reducer } from './_shared/store/reducer';
import { sagas } from './_shared/store/sagas';
import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}

const INITIAL_STATE = {
  auth: {},
};

type CustomRenderOptions<
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
> = RenderOptions<Q, Container> & {
  mocks?: typeof INITIAL_STATE;
  initialRoutes?: string[];
};

type Props = {
  store: EnhancedStore;
  initialRoutes?: string[];
};

export const TestWrapper: FC<Props> = ({
  children,
  store,
  initialRoutes = ['/'],
}) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <Router initialEntries={initialRoutes}>{children}</Router>
      </ChakraProvider>
    </Provider>
  );
};

export function customRender<
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
>(
  ui: React.ReactElement,
  options?: CustomRenderOptions<Q, Container>,
): RenderResult<Q, Container> {
  const state = { ...INITIAL_STATE, ...options?.mocks };
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
