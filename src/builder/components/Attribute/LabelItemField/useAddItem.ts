import React, { useState } from 'react';

export function useAddItem(add: (label: string, value: string) => void, placeholder: string, initValue: string) {
  const [textLabel, setTextLabel] = useState<string>('');
  const [inputError, setInputError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextLabel(e.target.value);
  };

  const checkAndAddItem = () => {
    if (textLabel.length > 15) {
      setInputError(true);
      setErrorMessage('Too long');
      return;
    }
    if (textLabel.trim().length === 0) {
      setInputError(true);
      setErrorMessage('No text');
      return;
    }
    setInputError(false);
    setErrorMessage('');
    add(textLabel, initValue);
  };

  return {
    textLabel,
    placeholder,
    inputError,
    errorMessage,
    onChange,
    checkAndAddItem,
  };
}
