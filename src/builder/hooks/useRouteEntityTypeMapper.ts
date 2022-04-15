import { BuilderEntityType } from '../store/types';
import { PATHS } from '../../_shared/types/paths';

export const useRouteEntityTypeMapper = () => {
  const mapRouteToEntityType = (route: string): BuilderEntityType => {
    if (route.match(PATHS.PERSONAS)) return 'persona';
    if (route.match(PATHS.TEMPLATES)) return 'template';
    return '';
  };

  const mapEntityTypeToRouteSegment = (entityType: BuilderEntityType): string => {
    if (entityType === 'persona') return PATHS.PERSONAS;
    if (entityType === 'template') return PATHS.TEMPLATES;
    return '';
  }

  return {
    mapEntityTypeToRouteSegment,
    mapRouteToEntityType
  }
}
