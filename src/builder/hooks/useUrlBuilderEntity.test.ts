import { renderHook } from '../../_shared/testConfig/customRenderHook';
import { useUrlBuilderEntity } from './useUrlBuilderEntity';
import { PATHS } from '../../_shared/types/paths';

const MOCK_ENTITY_ID = '42';
const MOCK_CREATE_PERSONA_ROUTE = `/${PATHS.PERSONAS}/create`;
const MOCK_EDIT_PERSONA_ROUTE = `/${PATHS.PERSONAS}/${MOCK_ENTITY_ID}/edit`;
const MOCK_CREATE_TEMPLATE_ROUTE = `/${PATHS.TEMPLATES}/create`;
const MOCK_EDIT_TEMPLATE_ROUTE = `/${PATHS.TEMPLATES}/${MOCK_ENTITY_ID}/edit`;

describe('useUrlBuilderEntity hook', () => {
  test('should retrieve the correct entityType from the current route', () => {
    const { result } = renderHook(() => useUrlBuilderEntity(), {
      initialRoutes: [MOCK_CREATE_PERSONA_ROUTE],
    });

    expect(result.current.entityType).toEqual('persona');

  });

  test('should retrieve the correct entityType from the current route', () => {
    const { result } = renderHook(() => useUrlBuilderEntity(), {
      initialRoutes: [MOCK_EDIT_PERSONA_ROUTE],
    });

    expect(result.current.entityType).toEqual('persona');

  });

  test('should retrieve the correct entityType from the current route', () => {
    const { result } = renderHook(() => useUrlBuilderEntity(), {
      initialRoutes: [MOCK_CREATE_TEMPLATE_ROUTE],
    });

    expect(result.current.entityType).toEqual('template');

  });

  test('should retrieve the correct entityType from the current route', () => {
    const { result } = renderHook(() => useUrlBuilderEntity(), {
      initialRoutes: [MOCK_EDIT_TEMPLATE_ROUTE],
    });

    expect(result.current.entityType).toEqual('template');

  });

  test('should retrieve the correct entityType from the current route', () => {
    const { result } = renderHook(() => useUrlBuilderEntity(), {
      initialRoutes: [''],
    });

    expect(result.current.entityType).toEqual('');

  });
});
