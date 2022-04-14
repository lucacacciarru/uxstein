import { BuilderEntityType } from '../store/types';
import { useRouteEntityTypeMapper } from './useRouteEntityTypeMapper';
import { TEMP_ID } from '../../_shared/utils';

export const useBuilderEntityRouteResolver = (entityType?: BuilderEntityType, entityId?: string, childSegments?: string[]): string | undefined => {
  const { mapEntityTypeToRouteSegment } = useRouteEntityTypeMapper();
  if (!entityType || !entityId || entityId === TEMP_ID) return undefined;

  const entitySegment = mapEntityTypeToRouteSegment(entityType);
  const entityRoute = `/${entitySegment}/${entityId}`;

  if (!childSegments?.length) return entityRoute;

  return `${entityRoute}/${childSegments.join('/')}`;
};
