import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

type Options = {
  placeholder?: string;
  initValue?: string;
}

export function useAddItem(add: (label: string, value: string) => void, options: Options) {
  const { t } = useTranslation();

  const [textLabel, setTextLabel] = useState<string>('');
  const [inputError, setInputError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextLabel(e.target.value);
  };

  const validateAndAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (textLabel.length > 15) {
      setInputError(true);
      setErrorMessage(t('builder.toolBar.errors.tooLong'));
      return;
    }
    if (textLabel.trim().length === 0) {
      setInputError(true);
      setErrorMessage(t('builder.toolBar.errors.noText'));
      return;
    }
    setInputError(false);
    setErrorMessage('');
    add(textLabel, options.initValue || '');
    setTextLabel('');
  };

  const placeholder = options.placeholder || t('builder.toolBar.attributes.items.placeholder');

  return {
    textLabel,
    placeholder,
    inputError,
    errorMessage,
    onChange,
    validateAndAdd,
  };
}
