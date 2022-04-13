import { renderHook } from '../../_shared/testConfig/customRenderHook';
import { useRouteEntityTypeMapper } from './useRouteEntityTypeMapper';
import { PATHS } from '../../_shared/types/paths';

const MOCK_PERSONA_ROUTE = `${PATHS.PERSONAS}/anyChildRoute`;
const MOCK_TEMPLATE_ROUTE = `${PATHS.TEMPLATES}/anyChildRoute`;

describe('useRouteEntityTypeMapper hook', () => {
  const {result} = renderHook(() => useRouteEntityTypeMapper());

  test('should retrieve a persona entity from a persona route', () => {
    const entity = result.current.mapRouteToEntityType(MOCK_PERSONA_ROUTE)
    expect(entity).toEqual('persona')
  })

  test('should retrieve a template entity from a template route', () => {
    const entity = result.current.mapRouteToEntityType(MOCK_TEMPLATE_ROUTE)
    expect(entity).toEqual('template')
  })

  test('should retrieve a persona route segment from a persona entity', () => {
    const entity = result.current.mapEntityTypeToRouteSegment('persona')
    expect(entity).toEqual(PATHS.PERSONAS)
  })

  test('should retrieve a template route segment from a template entity', () => {
    const entity = result.current.mapEntityTypeToRouteSegment('template')
    expect(entity).toEqual(PATHS.TEMPLATES)
  })
})
