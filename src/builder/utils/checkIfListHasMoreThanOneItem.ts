export function checkIfListHasMoreThanOneItem<T>(attributeItems?: T[]) {
  if (attributeItems) {
    if (attributeItems?.length > 1) {
      return true;
    }
  }
  return false;
}
