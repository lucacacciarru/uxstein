import { renderHook } from '../../_shared/testConfig/customRenderHook';
import { useValidationTextField } from './useValidationTextField';

const MOCK_VALUE = 'String too long for the maximum of the inserted type';

describe('useValidationTextField hook', () => {
  test('if string is too long for the entered type checkIfTextIsTooLong, errorInput and errorMessage should be true', () => {
    const { result } = renderHook(() => useValidationTextField('title'));
    const validate = result.current.checkIfTextIsTooLong(MOCK_VALUE);
    expect(validate).toBeTruthy();
    expect(result.current.errorInput).toBeTruthy();
    expect(result.current.errorMessage).toBeTruthy();
  });

  test('If the entered type exists inside maxLengthTextMap and the string is not longer than the maximum checkIfTextIsTooLong, errorInput and errorMessage should be false', () => {
    const { result } = renderHook(() => useValidationTextField('checkbox'));
    const validate = result.current.checkIfTextIsTooLong(MOCK_VALUE);
    expect(validate).toBeFalsy();
    expect(result.current.errorInput).toBeFalsy();
    expect(result.current.errorMessage).toBeFalsy();
  });

  test('if the entered type does not exist inside maxLengthTextMap, checkIfTextIsTooLong, errorInput and errorMessage should be false', () => {
    const { result } = renderHook(() => useValidationTextField('checkbox'));
    const validate = result.current.checkIfTextIsTooLong(MOCK_VALUE);
    expect(validate).toBeFalsy();
    expect(result.current.errorInput).toBeFalsy();
    expect(result.current.errorMessage).toBeFalsy();
  });
});
