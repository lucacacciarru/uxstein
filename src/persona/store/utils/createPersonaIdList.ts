import { Persona } from '../types/general';

export function createPersonaIdList(personaList: Persona[]) {
  return personaList.map(persona => persona.id);
}
