import { Persona } from '../types/general';

export function formatPersonaListToObject(
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
