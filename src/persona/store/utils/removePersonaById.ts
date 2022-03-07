import { PersonasData } from '../types/general';

export function removePersonaById(map: PersonasData['byId'], id: string) {
  const { [id]: deletedPersona, ...rest } = map;
  return rest;
}
