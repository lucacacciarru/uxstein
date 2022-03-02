import { TranslationKey } from '../../_shared/types/i18n';

type CurrentErrorMessage = Record<string, TranslationKey[]>;

export function validateAllField<T>(
  formData: T,
  functionMap: Record<
    string,
    Record<string, (data: T) => TranslationKey | null>
  >,
): Record<string, TranslationKey[]> {
  const currentErrorMessage: Record<string, TranslationKey[]> = {};
  for (const key in functionMap) {
    const selectedObject = functionMap[key];
    for (const subKey in selectedObject) {
      const response = selectedObject[subKey](formData);
      if (response) {
        currentErrorMessage[key as keyof CurrentErrorMessage] = [
          ...(currentErrorMessage[key as keyof CurrentErrorMessage] || []),
          response,
        ];
      } else {
        currentErrorMessage[key as keyof CurrentErrorMessage] = [
          ...(currentErrorMessage[key as keyof CurrentErrorMessage] || []),
        ];
      }
    }
  }
  return currentErrorMessage;
}
