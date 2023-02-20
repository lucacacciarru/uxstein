import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AttributeName } from '../store/types';

export const useValidationTextField = (attributeName: AttributeName) => {
  const { t } = useTranslation();

  const maxLengthTextMap: Partial<Record<AttributeName, number>> = {
    title: 40,
    subtitle: 55,
    body: 500,
  };

  const [errorInput, setErrorInput] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  function checkIfTextIsTooLong(currentText: string) {
    const selectedMaxLength = maxLengthTextMap[attributeName];
    if (selectedMaxLength) {
      if (currentText.length > selectedMaxLength) {
        setErrorInput(true);
        setErrorMessage(t('builder.toolBar.errors.textualContentTooLong'));
        return true;
      }
      setErrorInput(false);
      setErrorMessage('');
      return false;
    }
    return false;
  }

  return {
    errorInput,
    errorMessage,
    checkIfTextIsTooLong,
    maxLength: maxLengthTextMap[attributeName] || 0,
  };
};
