import { useLocation, useParams } from 'react-router-dom';
import { useRouteEntityTypeMapper } from './useRouteEntityTypeMapper';

export const useUrlBuilderEntity = () => {
  const { pathname } = useLocation();
  const { entityId } = useParams();
  const { mapRouteToEntityType } = useRouteEntityTypeMapper();

  return { entityId: entityId || '', entityType: mapRouteToEntityType(pathname) };
};
