import { BuilderEntityType } from '../store/types';
import { useRouteEntityTypeMapper } from './useRouteEntityTypeMapper';

export const useBuilderEntityRouteResolver = (entityType?: BuilderEntityType, entityId?: string, childSegments?: string[]): string | undefined => {
  const { mapEntityTypeToRouteSegment } = useRouteEntityTypeMapper();
  if (!entityType || !entityId) return undefined;

  const entitySegment = mapEntityTypeToRouteSegment(entityType);
  const entityRoute = `/${entitySegment}/${entityId}`;

  if (!childSegments?.length) return entityRoute;

  return `${entityRoute}/${childSegments.join('/')}`;
};
