import { TemplatesData } from '../types/general';

export function removeTemplateById(map: TemplatesData['byId'], id: string) {
  const { [id]: deletedTemplate, ...rest } = map;
  return rest;
}
