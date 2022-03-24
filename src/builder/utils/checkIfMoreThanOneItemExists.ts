import { ItemAttribute } from '../store/types';

export function checkIfMoreThanOneItemExists(
  attributeItems: ItemAttribute['items'] | undefined,
) {
  if (attributeItems) {
    const itemsLength = attributeItems.length;
    if (itemsLength <= 1) {
      return true;
    }
  }
  return false;
}
