
export function formatListToByIdObject<T extends { id: string }>(
  list: T[],
): Record<string, T> {
  return list.reduce(
    (initial, persona) => ({
      ...initial,
      [persona.id]: persona,
    }),
    {},
  );
}
