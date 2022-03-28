import { ItemAttribute } from '../store/types';
import { checkIfListHasMoreThanOneItem } from './checkIfListHasMoreThanOneItem';

const MOCK_ATTRIBUTE_ITEMS_ONE_ELEMENT: ItemAttribute['items'] | undefined = [
  { id: 'anyId', value: 'anyValue' },
];
const MOCK_ATTRIBUTE_ITEMS_MULTIPLE_ELEMENT:
  | ItemAttribute['items']
  | undefined = [
  { id: 'anyId', value: 'anyValue' },
  { id: 'anyOtherId', value: 'anyValue' },
];

describe('checkIfMoreThanOneItemExists function', () => {
  test('if parameter is undefined, should return false', () => {
    const returnValue = checkIfListHasMoreThanOneItem();
    expect(returnValue).toBeFalsy();
  });
  test('if parameter is contains only one item, should return false', () => {
    const returnValue = checkIfListHasMoreThanOneItem(
      MOCK_ATTRIBUTE_ITEMS_ONE_ELEMENT,
    );
    expect(returnValue).toBeFalsy();
  });
  test('if parameter is contains multiple item, should return true', () => {
    const returnValue = checkIfListHasMoreThanOneItem(
      MOCK_ATTRIBUTE_ITEMS_MULTIPLE_ELEMENT,
    );
    expect(returnValue).toBeTruthy();
  });
});
