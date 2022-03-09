export function removeItemInsideMap<T extends Record<string, {}>>(
  map: T,
  id: string,
): Omit<T, string> {
  const { [id]: deletePersona, ...rest } = map;
  return rest;
}
