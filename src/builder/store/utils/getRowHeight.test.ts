import { calculateRowHeight } from './calculateRowHeight';

describe('getRowHeight', () => {
  test('should return the expected numeric value', () => {
    const params = {
      paddingY: 20,
      pageHeight: 800,
      rowGap: 10,
      rowsNumber: 5,
    };
    const result = calculateRowHeight(params);

    const EXPECTED = 144;

    expect(result).toBe(EXPECTED);
  });
});
