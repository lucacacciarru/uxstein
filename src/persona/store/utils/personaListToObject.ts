import { Persona } from '../types/general';

export function personaListToObject(
  personaList: Persona[],
): Record<string, Persona> {
  return personaList.reduce(
    (initial, persona) => ({
      ...initial,
      [persona.id]: persona,
    }),
    {},
  );
}
