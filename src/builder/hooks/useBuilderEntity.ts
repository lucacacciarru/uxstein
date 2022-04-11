import { useLocation, useParams } from 'react-router-dom';
import { PATHS } from '../../_shared/types/paths';
import { BuilderEntityType } from '../store/types';

const mapRouteToEntity = (route: string): BuilderEntityType => {
  if (route.match(PATHS.PERSONAS)) return 'persona';
  if (route.match(PATHS.TEMPLATES)) return 'template';
  return '';
};

export const useBuilderEntity = () => {
  const { pathname } = useLocation();
  const { entityId } = useParams();

  return { entityId: entityId || '', entityType: mapRouteToEntity(pathname) };
};
