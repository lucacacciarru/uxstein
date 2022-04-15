import { renderHook } from '../../_shared/testConfig/customRenderHook';
import { useBuilderEntityRouteResolver } from './useBuilderEntityRouteResolver';
import { PATHS } from '../../_shared/types/paths';

const MOCK_ENTITY_ID = 'anyId';
const MOCK_CHILD_SEGMENTS = ['any', 'child', 'route'];

describe('useBuilderEntityRouteResolver hook', () => {
  test('should retrieve the correct route given an entityType and entityId', () => {
    const { result } = renderHook(() => useBuilderEntityRouteResolver('persona', MOCK_ENTITY_ID));
    expect(result.current).toBe(`/${PATHS.PERSONAS}/${MOCK_ENTITY_ID}`);
  });

  test('should retrieve the correct route if also a child route is defined', () => {
    const { result } = renderHook(() => useBuilderEntityRouteResolver('template', MOCK_ENTITY_ID, MOCK_CHILD_SEGMENTS));
    expect(result.current).toBe(`/${PATHS.TEMPLATES}/${MOCK_ENTITY_ID}/${MOCK_CHILD_SEGMENTS.join('/')}`);
  });

  test('should return undefined if no entityType or entityId are defined', () => {
    const noEntityId = renderHook(() => useBuilderEntityRouteResolver('template'));
    expect(noEntityId.result.current).toBeUndefined();

    const noEntityType = renderHook(() => useBuilderEntityRouteResolver(undefined, MOCK_ENTITY_ID));
    expect(noEntityType.result.current).toBeUndefined();

    const noEntity = renderHook(() => useBuilderEntityRouteResolver());
    expect(noEntity.result.current).toBeUndefined();
  })

});
