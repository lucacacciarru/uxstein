export function omitFromObject<
  T extends Record<string, unknown>,
  K extends keyof T,
>(map: T, item: K): Omit<T, K> {
  const { [item]: deletedItem, ...rest } = map;
  return rest;
}
