import { useNavigationTrigger } from './useNavigationTrigger';
import { renderHook } from '../testConfig/customRenderHook';
import { DependencyList } from 'react';

const MOCK_INITIAL_TRIGGERS = ['any', 'triggers'];
const MOCK_INITIAL_ROUTE = 'any/initial/route';
const MOCK_CHANGED_TRIGGERS = ['changed', 'triggers'];
const MOCK_CHANGED_ROUTE = 'any/changed/route';
const MOCK_NAVIGATOR = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => MOCK_NAVIGATOR,
  useLocation: () => ({
    pathname: MOCK_INITIAL_ROUTE,
  }),
}));


describe('useNavigationTrigger hook', () => {
  test('should perform a navigation to the param route when triggers change',
    () => {
      const hook = renderHook<{
        triggers: DependencyList,
        route?: string
      },
        void>(({
                 triggers,
                 route,
               }) => useNavigationTrigger(route, triggers), {
          initialProps: {
            triggers: MOCK_INITIAL_TRIGGERS,
            route: MOCK_INITIAL_ROUTE,
          },
        },
      );

      expect(MOCK_NAVIGATOR).not.toHaveBeenCalled();

      hook.rerender({
        triggers: MOCK_CHANGED_TRIGGERS,
        route: MOCK_CHANGED_ROUTE,
      });

      expect(MOCK_NAVIGATOR).toBeCalledWith(MOCK_CHANGED_ROUTE);
      expect(MOCK_NAVIGATOR).toHaveBeenCalledTimes(1);
    });

  test('should NOT perform navigation if the triggers do not change even if the route changes', () => {
    const hook = renderHook<{
      triggers: DependencyList,
      route?: string
    },
      void>(({
               triggers,
               route,
             }) => useNavigationTrigger(route, triggers), {
        initialProps: {
          triggers: MOCK_INITIAL_TRIGGERS,
          route: MOCK_INITIAL_ROUTE,
        },
      },
    );

    expect(MOCK_NAVIGATOR).not.toHaveBeenCalled();

    hook.rerender({
      triggers: MOCK_INITIAL_TRIGGERS,
      route: MOCK_CHANGED_ROUTE,
    });

    expect(MOCK_NAVIGATOR).not.toHaveBeenCalled();
  });

  test('should NOT perform a navigation if the destination route is the current route',
    () => {
      const hook = renderHook<{
        triggers: DependencyList,
        route?: string
      },
        void>(({
                 triggers,
                 route,
               }) => useNavigationTrigger(route, triggers), {
          initialProps: {
            triggers: MOCK_INITIAL_TRIGGERS,
            route: MOCK_INITIAL_ROUTE,
          },
        },
      );

      expect(MOCK_NAVIGATOR).not.toHaveBeenCalled();

      hook.rerender({
        triggers: MOCK_CHANGED_TRIGGERS,
        route: MOCK_INITIAL_ROUTE,
      });

      expect(MOCK_NAVIGATOR).not.toHaveBeenCalled();
    });

  test('should NOT perform navigation if the destination route is undefined', () => {
    const hook = renderHook<{
      triggers: DependencyList,
      route?: string
    },
      void>(({
               triggers,
               route,
             }) => useNavigationTrigger(route, triggers), {
        initialProps: {
          triggers: MOCK_INITIAL_TRIGGERS,
          route: MOCK_INITIAL_ROUTE,
        },
      },
    );

    expect(MOCK_NAVIGATOR).not.toHaveBeenCalled();

    hook.rerender({
      triggers: MOCK_CHANGED_TRIGGERS,
      route: undefined,
    });

    expect(MOCK_NAVIGATOR).not.toHaveBeenCalled();
  });
});
