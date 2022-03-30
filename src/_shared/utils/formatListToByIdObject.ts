
export function formatListToByIdObject<T extends { id: string }>(
  list: T[],
): Record<string, T> {
  return list.reduce(
    (initial, item) => ({
      ...initial,
      [item.id]: item,
    }),
    {},
  );
}
