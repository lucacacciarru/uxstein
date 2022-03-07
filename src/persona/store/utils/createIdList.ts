import { Persona } from '../types/general';

export function createIdList(personaList: Persona[]) {
  return personaList.map(persona => persona.id);
}
